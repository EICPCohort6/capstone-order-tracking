const express = require("express");
const cors = require("cors");
const database = require("../SQL/connection");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//init sequelize and run sync
(async function () {
  try {
    await database.connection.sync({
      logging: console.log,
      force: false,
    });
    console.log("Successful connection");
  } catch (err) {
    console.error("Database error:", err);
  }
})();

//include routes
require("../SQL/Routes/customer-routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
