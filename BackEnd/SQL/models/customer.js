const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const customer = sequelize.define(
    "customer",
    {
      customer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: "customer_id"
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      middle_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      customer_notes: {
        type: DataTypes.STRING,
      },
      street_number: {
        type: DataTypes.INTEGER,
      },
      unit_number: {
        type: DataTypes.STRING,
      },
      street_name: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      zipcode: {
        type: DataTypes.STRING,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
      underscored: true,
    }
  );

  return customer;
};
