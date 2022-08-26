const database = require("../connection");

const Orders = database.orders;
const ProductsConnOrders = database.products_connect_orders;
const Products = database.products;
const Op = database.Sequelize.Op;

///////////// Helper Functions /////////////////

function findByPKFunc(req, res, id) {
  Orders.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find order with id = ${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving order with id =" + id,
      });
    });

  return res;
}

//create a new order
exports.create = (req, res) => {
  // Validate request
  if (!req.body.customer_id ||
      !req.body.order_status_code ||
      !req.body.datetime_order_placed ||
      req.body.total_order_price == null) {

    res.status(400).send({
      message: "Required fields can not be empty!",
    });
    return;
  }

  // if validaiton is successful, create new order
  const newOrder = {
    customer_id: req.body.customer_id,
    order_status_code: req.body.order_status_code,
    datetime_order_placed: req.body.datetime_order_placed,
    total_order_price: req.body.total_order_price,
    order_notes: req.body.order_notes,
  };

  Orders.create(newOrder)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "An unexpected error occured while creating new Order",
      });
    });
};

//Retrieve all orders from the database.

//REVIEW THIS FUNCTION FOR ORDERS
exports.findAll = (req, res) => {
  const query = req.query;
  let condition = {};
  for (const field in query) {
    if (field.indexOf('id') !== -1) {
      condition[field] = {[Op.like]: `${query[field]}`}
    } else {
      condition[field] = {[Op.like]: `%${query[field]}%`}
    }
  }

  Orders.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "An unexpected error occured while retrieving all orders.",
      });
    });
};

// Find a single Order with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  findByPKFunc(req, res, id);
};

// Update a single Order with an id
exports.update = (req, res) => {
  if (
    !req.body.customer_id ||
    !req.body.order_status_code ||
    !req.body.datetime_order_placed ||
    !req.body.total_order_price
  ) {
    res.status(400).send({
      message: "Required fields can not be empty!",
    });
    return;
  }

  const id = req.params.id;
  Orders.update(req.body, {
    where: { order_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Order was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Order with id=${id}. Maybe Order was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Order with id=" + id,
      });
    });
};

exports.delete = async(req, res) => {
  const id = req.params.id;

  // to delete an order
  // 1. check order status code make sure = 1
  // 2. remove references to order_id in products_conn_orders
  // 3. update product inventory
  // 4. delete order

  const delete_trx = await database.connection.transaction();
  try {

    // ensure order is a draft
    const checkStatCode = await Orders.findAll({where: { order_id: id }, logging: console.log, transaction: delete_trx});

    const statusCode = checkStatCode[0] ? checkStatCode[0].dataValues.order_status_code : null;

    if (!statusCode) {
      res.status(500).send({
        message: `Cannot retrieve information about order_id ${id}`,
      });
      throw `Cannot retrieve information about order_id ${id}`;
    }

    if (statusCode !== 1) {
      res.status(500).send({
        message: `Cannot delete order_id ${id}, order is live!`,
      });
      throw `Cannot delete order_id ${id}, order is live!`;
    }

    // get products in order
    const getProdInord = await ProductsConnOrders.findAll({where: { order_id: id }, logging: console.log, transaction: delete_trx});

    const productsRaw = getProdInord[0] ? getProdInord : null;

    let orderExistsInPCO = true;
    if (!productsRaw) {
      // res.status(500).send({
      //   message: `Cannot retrieve products in order_id ${id}`,
      // });
      // throw `Cannot retrieve products in order_id ${id}`;

      console.log(`No products assigned to order ${id}`);
      orderExistsInPCO = false;
    }

    const products = [];

    for (let p in productsRaw) {
      const p_obj = {product_id: productsRaw[p].dataValues.product_id, order_quantity: productsRaw[p].dataValues.order_quantity}
      products.push(p_obj);
    }


    //return products to inventory
    for (let q in products) {
      //get current product inventory
      const checkProdInv = await Products.findAll({where: { product_id: products[q].product_id }, logging: console.log, transaction: delete_trx});

      const productInventory = checkProdInv[0] ? checkProdInv[0].dataValues.product_quantity : null;

      if (!productInventory) {
          throw `Could not retrieve information about product_id ${product_id}`;
      }

      const updProdInv = await Products.update({product_quantity: productInventory + products[q].order_quantity}, {where: { product_id: products[q].product_id }, logging: console.log, transaction: delete_trx})
      .then((num) => {
        if (num == 1) {
            // product inventory updated
        } else {
            res.send({
            message: `Cannot update inventory for product with product_id ${product_id} in products table.`,
            });
            throw `Cannot update inventory for product_id ${product_id}  in products table.`;
        }
      
      });
    }

    //before deleting from products_connect_orders, check if it exists


    // delete order from products_connect_orders
    if (orderExistsInPCO) {
      const delOrdPCO = await ProductsConnOrders.destroy({where: { order_id: id }, logging: console.log, transaction: delete_trx})
          .then((num) => {
          if (num > 0) {
              // order deleted from products_conn_orders
          } else {
              res.send({
              message: `Cannot delete order with order_id ${id} from products_connect_orders table.`,
              });
              throw `Cannot delete order with order_id ${id} from products_connect_orders table.`;
          }
        });
    }

    // delete order
    const delOrder = await Orders.destroy({where: { order_id: id }, logging: console.log, transaction: delete_trx})
            .then((num) => {
            if (num = 1) {
              res.send({
                message: `Order_id ${id} deleted from orders table.`,
                });
            } else {
                res.send({
                message: `Cannot delete order with order_id ${id} from orders table.`,
                });
                throw `Cannot delete order with order_id ${id} from orders table.`;
            }
          });


    await delete_trx.commit();

  } catch (err) {
    console.log(err);
    await delete_trx.rollback();
  }

};
