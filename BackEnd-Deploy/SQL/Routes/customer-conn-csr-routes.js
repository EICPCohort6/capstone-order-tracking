
const CustomersConnCSR = require("../Controller/customer-conn-csr-controller");
let router = require("express").Router();
  
// router.post("/", CustomersConnCSR.create);
  
router.get("/", CustomersConnCSR.findAll);
  
// router.get("/:id", CustomersConnCSR.findOne);
  
router.put("/:id", CustomersConnCSR.update);
  
module.exports = router;