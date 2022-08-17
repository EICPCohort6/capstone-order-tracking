const { Sequelize } = require("sequelize");

// change the URI to point to database
// const connection = new Sequelize('capstone-customer-manager.mysql.database.azure.com', {
//   logQueryParameters: true,
// });


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

module.exports = connection;
