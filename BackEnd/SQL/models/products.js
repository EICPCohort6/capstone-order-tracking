const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const product = sequelize.define(
    "product",
    {
      product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      product_SKU: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_description: {
        type: DataTypes.STRING,
      },
      product_image_url: {
        type: DataTypes.STRING,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
      underscored: true,
    }
  );
  
  return product;

};