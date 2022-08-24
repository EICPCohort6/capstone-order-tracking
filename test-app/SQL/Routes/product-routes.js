
    const Products = require("../Controller/product-controller");
    let router = require("express").Router();

    // Get all Orders
    router.get("/", Products.findAll);

    //Get specific order with id
    router.get("/:id", Products.findOne);

    //Update a Product with id
    router.put("/:id", Products.update);
    
    module.exports = router;