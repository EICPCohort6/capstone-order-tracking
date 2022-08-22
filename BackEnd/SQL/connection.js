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
  status: require("./models/status.js")(connection, Sequelize),
  csr: require("./models/csr.js")(connection, Sequelize),
  customers_connect_csr: require("./models/customers_connect_csr.js")(
    connection,
    Sequelize
  ),
  products_connect_orders: require("./models/products_connect_orders.js")(
    connection,
    Sequelize
  ),
};

//database.customers.hasMany(database.orders,  {  foreignKey: "customer_id", as: "orders" });

// one to many relationship between customers and orders on customerid
database.customers.hasMany(database.orders, {
  foreignKey: "customer_id",
  as: "orders",
});
database.orders.belongsTo(database.customers, {
  foreignKey: "customer_id",
  as: "customers",
});

//one to one relationship between orders and status on order_status_code
database.orders.hasOne(database.status, {
  foreignKey: "order_status_code",
  as: "status",
});

database.status.belongsTo(database.orders, {
  foreignKey: "order_status_code",
  as: "orders",
});

// // one to many relationship between csr and customers_connect_orders on csr_id
// database.csr.hasMany(database.customers_connect_csr, {
//   foreignKey: "csr_id",
//   constraints: false,
//   as: "customers_connect_csr",
// });

// database.customers_connect_csr.belongsTo(database.csr, {
//   foreignKey: "csr_id",
//   constraints: false,
//   as: "csr",
// });

// //one to many relationship between customers and customers_connect_orders on customer_id
// database.customers.hasMany(database.customers_connect_csr, {
//   foreignKey: "customer_id",
//   constraints: false,
//   as: "customers_connect_csr",
// });
// database.customers_connect_csr.belongsTo(database.customers, {
//   foreignKey: "customer_id",
//   constraints: false,
//   as: "customers",
// });


database.customers.belongsToMany(database.csr, {through: database.customers_connect_csr});
database.csr.belongsToMany(database.customers, {through: database.customers_connect_csr});

// // one to one relationships for between products and products_connect_orders on product_id
// database.products.hasOne(database.products_connect_orders, {
//   foreignKey: "product_id",
//   as: "products_connects_orders",
// });

// database.products_connect_orders.belongsTo(database.products, {
//   foreignKey: "product_id",
//   as: "products",
// });

// //one to many relationship between orders and product_connect_orders on order_id
// database.orders.hasMany(database.products_connect_orders, {
//   foreignKey: "order_id",
//   as: "products_connect_orders",
// });
// database.products_connect_orders.belongsTo(database.orders, {
//   foreignKey: "order_id",
//   as: "orders",
// });

database.products.belongsToMany(database.orders, {through: database.products_connect_orders});
database.orders.belongsToMany(database.products, {through: database.products_connect_orders});

module.exports = database;
