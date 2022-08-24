const { DataTypes } = require("sequelize");
const csr = require("./csr");
const customer = require("./customer");

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

      //customer_id

      //csr_id

      ccc_timestamp: {
        type: DataTypes.DATE,
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

  return customers_connect_csr;
};
