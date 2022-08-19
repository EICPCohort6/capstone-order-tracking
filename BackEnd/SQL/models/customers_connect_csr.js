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
        allowNull: false,
        autoIncrement: true,
        // TODO
        // Add reference to csr_id from CSR table
      },
      ccc_timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
      underscored: true,
    }
  );

  return customers_connect_csr;
};
