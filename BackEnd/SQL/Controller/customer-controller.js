const database = require("../connection");

const Customers = database.customers;
const Op = database.Sequelize.Op;

//create a new customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // if validaiton is successful, create customer
  const newCustomer = {
    // customer_id: req.body.customer_id,
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    phone_number: req.body.phone_number,
    email: req.body.email,
    customer_notes: req.body.customer_notes,
    street_number: req.body.street_number,
    unit_number: req.body.unit_number,
    street_name: req.body.street_name,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    zipcode: req.body.zipcode,
  };

  Customers.create(newCustomer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "An unexpected error occured while creating new Customer",
      });
    });
};

// Retrieve all customers from the database.
exports.findAll = (req, res) => {
  // planning to make this dynamic for all fields that appear in query strings, just last_name for now
  const last_name = req.query.last_name;
  let condition = last_name
    ? { last_name: { [Op.like]: `%${last_name}%` } }
    : null;

  Customers.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "An unexpected error occured while retrieving all customers.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Customers.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Customer with id = ${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving customer with id =" + id,
      });
    });
};

// Update a single Customer with an id
exports.update = (req, res) => {
  const id = req.params.id;
  Customers.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Customer was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Customer with id=${id}. Maybe Customer was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Customer with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Customers.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Customer was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Customer with id=" + id,
      });
    });
};
