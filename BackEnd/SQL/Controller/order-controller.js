const database = require("../connection");

const Orders = database.orders;
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
  if (!req.body.customer_id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // if validaiton is successful, create new order
  const newOrder = {
    // order_id: req.body.order_id,
    customer_id: req.body.customer_id,
    order_status_code: req.body.order_status_code,
    datetime_order_placed: req.body.datetime_order_placed,
    total_order_price: req.body.total_order_price,
    order_notes: req.body.order_notes,
  };

  Orders.create(newOrder)
    .then((data) => {
      res.send(data);
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
  Orders.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Order.",
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
  const id = req.params.id;
  Orders.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Customer was updated successfully.",
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

exports.delete = (req, res) => {
  const id = req.params.id;

  Orders.destroy({
    where: { order_id: id, order_status_code: 1 },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Order was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Order with id=${id}. Order was not found, or status code is not 'draft'.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};
