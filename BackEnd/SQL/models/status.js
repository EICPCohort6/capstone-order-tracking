const { DataTypes } = require("sequelize");
let Order = require("./order")

module.exports = (sequelize, Sequelize) => {
  const status = sequelize.define(
    "status",
    {
     order_status_code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Order,
            key: "order_status_code",
          },
      },
      status_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
      underscored: true,
    }
  );
  
  return status;

};