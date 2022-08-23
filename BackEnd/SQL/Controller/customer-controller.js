const database = require("../connection");

const Customers = database.customers;
const Op = database.Sequelize.Op;

//create a new customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.last_name || 
      !req.body.first_name || 
      !req.body.email || 
      !req.body.date_of_birth || 
      !req.body.street_number || 
      !req.body.street_name || 
      !req.body.city || 
      !req.body.state || 
      !req.body.country || 
      !req.body.zipcode ) {
    res.status(400).send({
      message: "Required fields can not be empty!",
    });
    return;
  }

  // if validaiton is successful, create customer
  const newCustomer = {
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    phone_number: req.body.phone_number,
    email: req.body.email,
    customer_notes: req.body.customer_notes,
    date_of_birth: req.body.date_of_birth,
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
      res.status(201).send(data);
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
  
  const query = req.query;
  let condition = {};
  for (const field in query) {
    condition[field] = {[Op.like]: `%${query[field]}%`}
  }

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

  if (!req.body.last_name || 
      !req.body.first_name || 
      !req.body.email || 
      !req.body.date_of_birth || 
      !req.body.street_number || 
      !req.body.street_name || 
      !req.body.city || 
      !req.body.state || 
      !req.body.country || 
      !req.body.zipcode ) {
      res.status(400).send({
      message: "Required fields can not be empty!",
    });
    return;
  }

  const id = req.params.id;
  Customers.update(req.body, {
    where: { customer_id: id },
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
    where: { customer_id: id },
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
        message: err,
      });
    });
};
