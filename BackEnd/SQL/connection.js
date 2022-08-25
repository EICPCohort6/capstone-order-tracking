const { Sequelize } = require("sequelize");

const config = {
  database: process.env.mySqlHostName,
  username: process.env.mySqlUser,
  password: process.env.mySqlPass,
};

var connection = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    logging: console.log,
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
  }
);


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
  users: require("./models/users.js")(connection, Sequelize),
};

// one to many relationship between customers and orders on customerid
database.customers.hasMany(database.orders, {
  foreignKey: "customer_id",
  as: "orders",
  allowNull: true,
});
database.orders.belongsTo(database.customers, {
  foreignKey: "customer_id",
  as: "customers",
  allowNull: true,
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

database.customers.belongsToMany(database.csr, {
  through: database.customers_connect_csr,
  foreignKey: 'customer_id',
  allowNull: true,
});
database.csr.belongsToMany(database.customers, {
  through: database.customers_connect_csr,
  foreignKey: 'csr_id'
});

database.products.belongsToMany(database.orders, {
  through: database.products_connect_orders,
  foreignKey: 'product_id'
});
database.orders.belongsToMany(database.products, {
  through: database.products_connect_orders,
  foreignKey: 'order_id'
});

// one to one relationships for between users and CSR
database.csr.hasOne(database.users, {
  foreignKey: "csr_id",
  as: "users",
});

database.users.belongsTo(database.csr, {
  foreignKey: "csr_id",
  as: "csr",
});


module.exports = database;
