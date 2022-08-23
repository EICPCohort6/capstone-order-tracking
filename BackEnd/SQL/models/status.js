const { DataTypes } = require("sequelize");
let Order = require("./orders");

module.exports = (sequelize, Sequelize) => {
  const status = sequelize.define(
    "status",
    {
      order_status_code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      status_name: {
        type: DataTypes.STRING,
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

  return status;
};
