const sequelize = require("sequelize");
const database = require("../connection");

const CustomersConnCSR = database.customers_connect_csr;
const Op = database.Sequelize.Op;

exports.findAll = (req, res) => {
  
  const query = req.query;
  let condition = {};
  for (const field in query) {
    console.log(field)
    if (field.indexOf('id') !== -1) {
      condition[field] = {[Op.like]: `${query[field]}`}
    } else {
      condition[field] = {[Op.like]: `%${query[field]}%`}
    }
  }

  CustomersConnCSR.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "An unexpected error occured while retrieving customers and customer service reps.",
      });
    });
};

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