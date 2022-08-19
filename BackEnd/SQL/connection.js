const { Sequelize } = require("sequelize");

var connection = new Sequelize("capstone", "csr_root", "Password1", {
  host: "capstone-customer-manager.mysql.database.azure.com",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
});

const database = {
  Sequelize: Sequelize,
  connection: connection,

  // Link models with database connection here
  customers: require("./models/customer.js")(connection, Sequelize),
  orders: require("./models/orders.js")(connection, Sequelize),
  products: require("./models/products.js")(connection, Sequelize),
};

//database.customers.hasMany(database.orders,  {  foreignKey: "customer_id", as: "orders" });
database.customers.hasMany(database.orders, {
  foreignKey: "customer_id",
  as: "orders",
});
database.orders.belongsTo(database.customers, {
  foreignKey: "customer_id",
  as: "customers",
});

// need to define relationships for orders and products

module.exports = database;
