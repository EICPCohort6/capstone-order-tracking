const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const customers_connect_csr = sequelize.define(
    "customers_connect_csr",
    {
      customers_connect_csr_id: {
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
      csr_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      ccc_timestamp: {
        type: DataTypes.DATE
      }
    },
    {
      createdAt: false,
      updatedAt: false,
      underscored: true,
    }
  );
  
  return product;

};