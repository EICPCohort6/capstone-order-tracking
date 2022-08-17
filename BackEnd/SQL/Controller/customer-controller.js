let { Customers } = require("../models/customer");
const connection = require("../connection");
const Op = connection.Op;

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
    customer_id: req.body.customer_id,
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

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;

  let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

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

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {

// };
// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {};
// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {};
