const database = require("../connection");

const ProductsConnOrders = database.products_connect_orders;
const Products = database.products;
const Orders = database.orders;
const Op = database.Sequelize.Op;

exports.findAll = (req, res) => {
  
    const query = req.query;
  let condition = {};
  for (const field in query) {
    console.log(field)
    if (field.indexOf('id') !== -1) {
      condition[field] = {[Op.like]: `${query[field]}`}
      console.log("ID")
    } else {
      condition[field] = {[Op.like]: `%${query[field]}%`}
      console.log("NOT ID")
    }
  }

  ProductsConnOrders.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "An unexpected error occured while retrieving all products in orders.",
      });
    });
  };

// add products to an order by inserting into products_connect_orders table
exports.create = async(req,res) => {

    if (!req.body.order_id ||
        !req.body.product_id ||
        !req.body.order_quantity) {
        
        res.status(400).send({
            message: "Required fields can not be empty!",
        });
        return;
    }

    const create_trx = await database.connection.transaction();
    try {
        
        const newProductOrder = {
            order_id: req.body.order_id,
            product_id: req.body.product_id,
            order_quantity: req.body.order_quantity
        }

        const product_id = req.body.product_id;

        // Get number of product available and it's individual price
        const checkProdInv = await Products.findAll({where: { product_id: product_id }, logging: console.log, transaction: create_trx});

        const quantityAvailable = checkProdInv[0].dataValues.product_quantity;
        const costPerItem = checkProdInv[0].dataValues.product_price;

        if (!quantityAvailable || !costPerItem) {
            throw `Could not retrieve information about product_id ${product_id}`;
        }

        if (quantityAvailable < newProductOrder.order_quantity) {
            res.send({message: "Could not add product to order - not enough product in inventory"});
            throw "Could not add product to order - not enough product in inventory";
        }

        // if there is enough product left in inventory:
        // 1. remove product from inventory by updating product table
        // 2. add product to order by updating product_conn_order table
        // 2.1 if product is already in provided order, update quantity
        // 2.2 if product is not yet in order, create record
        // 3. update order total price by adding quantity*costPerItem to order table

        // 1. remove product from inventory by updating product table
        const updProdInv = await Products.update({product_quantity: quantityAvailable - newProductOrder.order_quantity}, 
            {where: {product_id: newProductOrder.product_id}, 
            logging: console.log, transaction: create_trx})
            .then((num) => {
                if (num == 1) {
                  // product quant updated successfully
                } else {
                  res.send({
                    message: `Cannot update product quantity of product with product_id ${product_id} in product table.`,
                  });
                  throw `Cannot update product quantity of product with product_id ${product_id} in product table.`;
                }
              });
        
        // 2. add product to order by updating product_conn_order table

        // first, find out if product we want to add is already associated with specified order
        const checkIfProdInOrd = await ProductsConnOrders.findAll({where: { order_id: req.body.order_id, product_id: newProductOrder.product_id}, logging: console.log, transaction: create_trx});

        if (checkIfProdInOrd.length == 1) {
            //2.1 product already exists. update the quantity in existing record
            const quantExisting = checkIfProdInOrd[0].dataValues.order_quantity;
            const updProdInv = await ProductsConnOrders.update({order_quantity: quantExisting + newProductOrder.order_quantity}, 
                {where: {order_id: newProductOrder.order_id, product_id: newProductOrder.product_id}, 
                logging: console.log, transaction: create_trx})
                .then((num) => {
                    if (num == 1) {
                      // product quant updated successfully
                    } else {
                      res.send({
                        message: `Cannot update product quantity of product with product_id ${newProductOrder.product_id} for order_id ${newProductOrder.order_id} in product_connect_order table.`,
                      });
                      throw `Cannot update product quantity of product with product_id ${newProductOrder.product_id} for order_id ${newProductOrder.order_id} in product_connect_order table.`;
                    }
                  });
        } else {
            //2.2 product does not yet exist in order. create new record
            const addProdToOrd = await ProductsConnOrders.create(newProductOrder, 
                {logging: console.log, transaction: create_trx})
                .then((created) => {
                    if (created) {
                      // product added to order successfully
                    } else {
                      res.send({
                        message: `Cannot add product with product_id ${newProductOrder.product_id} to order with order_id ${newProductOrder.order_id}`,
                      });
                      throw `Cannot add product with product_id ${newProductOrder.product_id} to order with order_id ${newProductOrder.order_id}`;
                    }
                });
        }

        // 3. update order total price by adding quantity*costPerItem to order table

        // first, get original price to add to
        const originalOrdPrice = await Orders.findAll({where: { order_id: req.body.order_id}, logging: console.log, transaction: create_trx});

        if (originalOrdPrice.length !== 1) {
            res.send({message:`Cannot retrieve information about order with order_id ${newProductOrder.order_id} from orders table.`})
            throw `Cannot retrieve information about order with order_id ${newProductOrder.order_id} from orders table.`;
        }

        const orig_price = originalOrdPrice[0].dataValues.total_order_price;

        const updOrdPrice = await Orders.update({total_order_price: orig_price + (newProductOrder.order_quantity * costPerItem)}, 
            {where: {order_id: newProductOrder.order_id}, 
            logging: console.log, transaction: create_trx})
            .then((num) => {
                if (num == 1) {
                    res.send({
                        message: `Product was added to order successfully, order price was updated, and product inventory was adjusted.`,
                      });
                } else {
                  res.send({
                    message: `Cannot update total_order_price of order with order_id ${newProductOrder.order_id}`,
                  });
                  throw `Cannot update total_order_price of order with order_id ${newProductOrder.order_id}`;
                }
              });
        

        await create_trx.commit();
        return;

    } catch (err) {
        console.log(err);
        await create_trx.rollback();
    }

}

//TODO: Edit quantity of product in order. Need order_id, product_id and new quantity. If new quantity = 0, delete product from specified order_id

exports.update = async(req,res) => {

    // 1. get original quantity for order and product
    // 2.1 if new quantity = 0, delete record from products_conn_orders 
    // 2.2 get difference between original and new quantity and update record from products_conn_orders with new quantity (CHECK IF NEW AMT IS AVAILABLE)
    // 3. add difference to inventory
    // 4. adjust order price by difference * individual price

    const order_id = req.query.order_id;
    const product_id = req.query.product_id;
    const new_quantity = req.body.order_quantity;

    const upd_trx = await database.connection.transaction();

    try {
        // Get number of product available and it's individual price
        const checkProdInv = await Products.findAll({where: { product_id: product_id }, logging: console.log, transaction: upd_trx});

        const quantityAvailable = checkProdInv[0].dataValues.product_quantity;
        const costPerItem = checkProdInv[0].dataValues.product_price;

        if (!quantityAvailable || !costPerItem) {
            throw `Could not retrieve information about product_id ${product_id}`;
        }

        if (quantityAvailable < new_quantity) {
            res.send({message: "Could not add product to order - not enough product in inventory"});
            throw "Could not add product to order - not enough product in inventory";
        }

        // get original amt in order
        const checkOrderQt = await ProductsConnOrders.findAll({where: { order_id: order_id, product_id: product_id }, logging: console.log, transaction: upd_trx});

        const original_quantity = checkOrderQt[0] ? checkOrderQt[0].dataValues.order_quantity : null;

        if (!original_quantity) {
            res.send({message: `Product with product_id ${product_id} does not exist in order with order_id ${order_id}, please add it first.`})
            throw `Product with product_id ${product_id} does not exist in order with order_id ${order_id}, please add it first.`;
        } 

        const prodDiff = original_quantity - new_quantity;

        if (new_quantity == 0) {
            // delete record from products_conn_orders
            const delProdFromOrd = await ProductsConnOrders.destroy({where: { order_id: order_id, product_id: product_id }, logging: console.log, transaction: upd_trx})
            .then((num) => {
            if (num == 1) {
                // product deleted from order successfully
            } else {
                res.send({
                message: `Cannot delete product with product_id ${product_id} from order with order_id ${order_id} from products_connect_orders table.`,
                });
                throw `Cannot delete product with product_id ${product_id} from order with order_id ${order_id} from products_connect_orders table.`;
            }
            });
        } else {
            // update record from products_conn_orders
            const updProdInOrd = await ProductsConnOrders.update({order_quantity: new_quantity}, {where: { order_id: order_id, product_id: product_id }, logging: console.log, transaction: upd_trx})
            .then((num) => {
            if (num == 1) {
                // product updated in order successfully
            } else {
                res.send({
                message: `Cannot update quantity for product with product_id ${product_id} from order with order_id ${order_id} from products_connect_orders table.`,
                });
                throw `Cannot update quantity for product_id ${product_id} from order with order_id ${order_id} from products_connect_orders table.`;
            }
            });
        }

        //add difference to products table
        const updProdInv = await Products.update({product_quantity: quantityAvailable + prodDiff}, {where: { product_id: product_id }, logging: console.log, transaction: upd_trx})
            .then((num) => {
            if (num == 1) {
                // product updated in order successfully
            } else {
                res.send({
                message: `Cannot update inventory for product with product_id ${product_id} in products table.`,
                });
                throw `Cannot update inventory for product_id ${product_id}  in products table.`;
            }
            });

        //get original total price of order
        const checkOrigOrderPrice = await Orders.findAll({where: { order_id: order_id }, logging: console.log, transaction: upd_trx});

        const totalOrigPrice = checkOrigOrderPrice[0].dataValues.total_order_price;

        if (!totalOrigPrice) {
            res.send({
                message: `Could not retrieve information about order_id ${order_id}`,
            });
            throw `Could not retrieve information about order_id ${order_id}`;
        }

        //update order price
        const priceDiff = prodDiff * costPerItem;

        console.log(prodDiff);
        console.log(totalOrigPrice);
        console.log(priceDiff);
        console.log(totalOrigPrice + priceDiff);

        const updOrderPrice = await Orders.update({total_order_price: totalOrigPrice - priceDiff}, {where: { order_id: order_id }, logging: console.log, transaction: upd_trx})
            .then((num) => {
            if (num == 1) {
                // price updated successfully
                res.send({
                    message: `Product quantity updated successfully. Product inventory and total order price adjusted accordingly.`
                })
            } else {
                res.send({
                    message: `Cannot update total_order_price for order with order_id ${order_id} in products table.`,
                });
                throw `Cannot update total_order_price for order with order_id ${order_id} in products table.`;
            }
        });

        await upd_trx.commit();

    } catch (err) {
        console.log(err);
        await upd_trx.rollback();
    }
  };


  //TODO: destroy order from table entirely (remove every record with specified order_id)