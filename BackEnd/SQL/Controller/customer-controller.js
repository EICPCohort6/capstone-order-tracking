const sequelize = require("sequelize");
const database = require("../connection");

const Customers = database.customers;
const CustomersConnCSR = database.customers_connect_csr;
const Orders = database.orders;
const Op = database.Sequelize.Op;

//create a new customer
exports.create = (req, res) => {
  // Validate request
  if (
    !req.body.last_name ||
    !req.body.first_name ||
    !req.body.email ||
    !req.body.date_of_birth ||
    !req.body.street_number ||
    !req.body.street_name ||
    !req.body.city ||
    !req.body.state ||
    !req.body.country ||
    !req.body.zipcode
  ) {
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
    condition[field] = { [Op.like]: `%${query[field]}%` };
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
  if (
    !req.body.last_name ||
    !req.body.first_name ||
    !req.body.email ||
    !req.body.date_of_birth ||
    !req.body.street_number ||
    !req.body.street_name ||
    !req.body.city ||
    !req.body.state ||
    !req.body.country ||
    !req.body.zipcode
  ) {
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

exports.delete = async (req, res) => {
  const id = req.params.id;
  const delete_trx = await database.connection.transaction();
  try {
<<<<<<< HEAD
    /// THIS LINE: update is showing, but only because ccc_timestamp can be updated. customer_id and csr_id are both unable to be updated.
    const updCustID = await CustomersConnCSR.update(
      {
        customers_connect_csr_id: 100,
        customer_id: 200,
        csr_id: 42,
        ccc_timestamp: "2023-04-21 21:56:55",
      },
      {
        where: { customer_id: 100 },
        logging: console.log,
        transaction: delete_trx,
      }
    ).then((num) => {
=======
    /// Before deleting customer from customers table, first set customer_id in customers_connect_csr to null (as well as in orders table)
    const setNullCustConn = await CustomersConnCSR.update({customer_id: null}, {where: { customer_id: id }, logging: console.log, transaction: delete_trx})
    .then((num) => {
>>>>>>> back-end
      if (num == 1) {
        // res.status({
        //   message: `Customer ${id} was updated to null in customers_conn_csr successfully.`,
        // });
      } else {
        res.send({
          message: `Cannot update Customer with id=${id} in customers_conn_csr. Maybe Customer was not found or req.body is empty!`,
        });
        throw `Cannot update Customer with id=${id} in customers_conn_csr. Maybe Customer was not found or req.body is empty!`;
        
      }
    });

    const setNullOrders = await Orders.update({customer_id: null}, {where: { customer_id: id }, logging: console.log, transaction: delete_trx})
    .then((num) => {
      if (num > 0) {
        // res.status({
        //   message: `Customer ${id} was updated to null in customers_conn_csr successfully.`,
        // });
      } else {
        res.send({
          message: `Cannot update Customer with id=${id} in orders table. Maybe Customer was not found or req.body is empty!`,
        });
        throw `Cannot update Customer with id=${id} in orders table. Maybe Customer was not found or req.body is empty!`;
      }
    });
    
    //after all tables that may reference this customer_id have been updated to customer_id = null, we can now delete
    //the customer from the customers table
   const delCust = await Customers.destroy({where: { customer_id: id }, logging: console.log, transaction: delete_trx})
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Customer ${id} was deleted from customers table successfully, and all associated record have been updated with customer_id = null.`,
        });
      } else {
        res.send({
          message: `Cannot delete Customer with id=${id} from customers table.`,
        });
        throw `Cannot delete Customer with id=${id} from customers table.`;
      }
    });
    await delete_trx.commit();

    // })
  } catch (err) {
    console.log(err);
    await delete_trx.rollback();
  }
  // Customers.destroy({
  //   where: { customer_id: id },
  // })
  //   .then((num) => {
  //     if (num == 1) {
  //       res.send({
  //         message: "Customer was deleted successfully!",
  //       });
  //     } else {
  //       res.send({
  //         message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`,
  //       });
  //     }
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message: err,
  //     });
  //   });
};
