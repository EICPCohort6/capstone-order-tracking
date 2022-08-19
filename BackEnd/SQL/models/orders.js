const { DataTypes } = require("sequelize");
let Customer = require("./customer");

module.exports = (sequelize, Sequelize) => {
  const order = sequelize.define(
    "order",
    {
      order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Customer,
          key: "customer_id",
        },
      },
      order_status_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      datetime_order_placed: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      total_order_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      order_notes: {
        type: DataTypes.STRING,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
      underscored: true,
    }
  );

  return order;
};
