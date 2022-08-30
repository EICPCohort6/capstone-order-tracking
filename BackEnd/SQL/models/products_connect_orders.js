const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const products_connect_orders = sequelize.define(
    "products_connect_orders",
    {
      products_connect_orders_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      //order_id

      //product_id

      order_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      underscored: true,
    }
  );

  return products_connect_orders;
};
