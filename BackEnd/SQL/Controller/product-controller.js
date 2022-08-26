const database = require("../connection");

const Products = database.products;
const Op = database.Sequelize.Op;

// Retrieve all products from the database.
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

  Products.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "An unexpected error occured while retrieving all products.",
      });
    });

};

exports.findAllBulk = (req, res) => {

  const product_id_list = req.body.product_id;

  Products.findAll({where: {product_id: {[Op.or]: product_id_list}}})
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message ||
        "An unexpected error occured while retrieving all products.",
    });
  });
}

// Find a single Product with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Products.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with id = ${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Product with id =" + id,
      });
    });
};

// Update a single Product with an id
exports.update = (req, res) => {

  if (!req.body.customer_id ||
    !req.body.product_SKU ||
    !req.body.product_price ||
    !req.body.product_name ||
    !req.body.product_quantity) {
    res.status(400).send({
    message: "Required fields can not be empty!",
    });
    return;
  }

  const id = req.params.id;
  Products.update(req.body, {
    where: { product_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Product with id=${id}. Maybe Customer was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Product with id=" + id,
      });
    });
};
