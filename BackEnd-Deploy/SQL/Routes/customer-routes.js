
  const Customers = require("../Controller/customer-controller");
  var router = require("express").Router();

  //Create new customer
  router.post("/", Customers.create);

  // Get all Customers
  router.get("/", Customers.findAll);

  //Get specific customer with id

  router.get("/:id", Customers.findOne);

  //Update a Customer with id
  router.put("/:id", Customers.update);

  //Delete a Customer with id
  router.delete("/:id", Customers.delete);

  module.exports = router;

  
