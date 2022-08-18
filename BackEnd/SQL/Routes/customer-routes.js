module.exports = (app) => {
  const Customers = require("../Controller/customer-controller");
  let router = require("express").Router();

  //Create new customer
  router.post("/", Customers.create);

  // Get all Customers
  router.get("/", Customers.findAll);

  //Get specific customer with id

  router.get("/:id", Customers.findOne);

  // Update a Customer with id
  // router.put("/:id", Customers.update);

  // Delete a Customer with id
  // router.delete("/:id", Customers.delete);

  // Delete all Customers
  // router.delete("/", Customers.deleteAll);

  app.use("/api/customers", router);
};
