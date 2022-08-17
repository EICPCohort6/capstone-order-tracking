const { Sequelize } = require("sequelize");

// change the URI to point to database
const sequelize = new Sequelize("URI with hostname/pass pointing to database", {
  logQueryParameters: true,
});

modules.exports = sequelize;
