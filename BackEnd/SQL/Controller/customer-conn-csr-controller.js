const sequelize = require("sequelize");
const database = require("../connection");

const Customers = database.customers;
const CustomersConnCSR = database.customers_connect_csr;
const Op = database.Sequelize.Op;

exports.update = (req, res) => {

    const id = req.params.id;
    CustomersConnCSR.update(req.body, {
      where: { customer_id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Customer CSR record was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update Customer CSR record with id=${id}. Maybe Customer was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Customer CSR record with id=" + id,
        });
      });
  };