
const Orders = require("../Controller/order-controller");
let router = require("express").Router();

//Create new order
router.post("/", Orders.create);

// Get all Orders
router.get("/", Orders.findAll);

//Get specific order with id

router.get("/:id", Orders.findOne);

//Update a Order with id
router.put("/:id", Orders.update);

//Delete a Order with id
router.delete("/:id", Orders.delete);

module.exports = router;