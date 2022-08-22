const { DataTypes } = require("sequelize");
const products = require("./products");

module.exports = (sequelize, Sequelize) => {
  const products_connect_csr = sequelize.define(
    "products_connect_csr",
    {
      products_connect_orders_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Order,
          key: "order_id",
        },
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: products,
          key: "product_id",
        },
      },
      order_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
      underscored: true,
    }
  );

  return products_connect_csr;
};
