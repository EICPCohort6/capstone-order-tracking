module.exports = (app) => {
    const ProductsConnOrders = require("../Controller/products-conn-orders-controller");
    let router = require("express").Router();
  
    router.post("/", ProductsConnOrders.create);
  
    router.get("/", ProductsConnOrders.findAll);
  
    //router.get("/:id", ProductsConnOrders.findOne);
  
    router.put("/:id", ProductsConnOrders.update);
  
    app.use("/api/products_connect_orders", router);
  };