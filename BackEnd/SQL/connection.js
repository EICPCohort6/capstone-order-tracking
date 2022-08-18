const { Sequelize } = require("sequelize");

var connection = new Sequelize('capstone', 'csr_root', 'Password1', {
  host: 'capstone-customer-manager.mysql.database.azure.com',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  ssl: true,
  dialectOptions: {
       ssl: {
          require: true
       }
     }
      
});

const database = {
  Sequelize: Sequelize,
  connection: connection,

  // Link models with database connection here
  customers:  require("./models/customer.js")(connection, Sequelize)
};

module.exports = database;
