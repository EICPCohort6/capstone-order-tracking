
const Products = require("../Controller/product-controller");
let router = require("express").Router();

// Get all products
router.get("/", Products.findAll);

// Get all products
router.post("/bulk", Products.findAllBulk);

//Get specific product with id
router.get("/:id", Products.findOne);

//Update a Product with id
router.put("/:id", Products.update);
    
module.exports = router;