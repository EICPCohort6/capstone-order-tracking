const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//init sequelize and run sync
const connection = require(sequelize);

(async function () {
  try {
    await connection.sync({
      logging: console.log,
      force: true, // use this to resync database in development, otherwise leave when production
    });
    console.log("Successful connection");
  } catch (err) {
    console.error("Database error:", err);
  }
})();

// test endpoint
/*
app.get("/", (req, res) => {
  res.json({
    message: "Backend of capstone order tracking is up and running!",
  });
});
*/

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
