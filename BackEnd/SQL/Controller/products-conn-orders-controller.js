const database = require("../connection");

const ProductsConnOrders = database.products_connect_orders;
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
exports.create = (req, res) => {

    if (!req.body.order_id ||
        !req.body.product_id ||
        !req.body.order_quantity) {
        
        res.status(400).send({
            message: "Required fields can not be empty!",
        });
        return;
    }

    //TODO: NEED TRANSACTION TO CHECK IF PRODUCT IS AVAILABLE!!!
    const newProductOrder = {
        order_id: req.body.order_id,
        product_id: req.body.product_id,
        order_quantity: req.body.order_quantity
    }

    ProductsConnOrders.create(newProductOrder)
    .then((data) => {
        res.status(201).send(data);
    })
    .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "An unexpected error occured while creating new Customer",
        });
    });
}



exports.update = (req, res) => {

    // const id = req.params.id;
    // ProductsConnOrders.update(req.body, {
    //   where: { customer_id: id },
    // })
    //   .then((num) => {
    //     if (num == 1) {
    //       res.send({
    //         message: "Product-Order record was updated successfully.",
    //       });
    //     } else {
    //       res.send({
    //         message: `Cannot update Product-Order record with id=${id}. Maybe Product-Order was not found or req.body is empty!`,
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     res.status(500).send({
    //       message: "Error updating Product-Order record with id=" + id,
    //     });
    //   });
  };