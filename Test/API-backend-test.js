const request = require("supertest");
const assert = require("assert");
const express = require("express");

const app = require("../BackEnd/Express/server.js"); // express();

describe("tests for /api/customers", function () {
  //tests for GET requests
  it("responds with json", function (done) {
    request(app)
      .get("/api/customers") // GET all customers
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("should get customer with ID 2", function (done) {
    request(app)
      .get("/api/customers/2") // GET specific customer by ID
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          customer_id: 2,
          first_name: "Jocelyn",
          middle_name: "Angelica",
          last_name: "Mendez",
          phone_number: "(506) 380-6438",
          email: "metus@outlook.ca",
          customer_notes:
            "laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in",
          date_of_birth: "2009-07-07",
          street_number: 68,
          unit_number: null,
          street_name: "interdum.",
          city: "Nampa",
          state: "Idaho",
          country: "United States",
          zipcode: "23351",
        },
        done
      );
  });

  it("should get customer with last name Atkinson", function (done) {
    request(app)
      .get("/api/customers?last_name=Atkinson") // GET customers by last name
      //.query('last_name=Paxton')
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        [
          {
            //brackets because since last name isn't unique, API
            //returns a list instead of a single object like with ID
            customer_id: 3,
            first_name: "Benjamin",
            middle_name: "Evangeline",
            last_name: "Atkinson",
            phone_number: "1-932-321-5877",
            email: "lobortis@hotmail.org",
            customer_notes: "gravida mauris ut mi. Duis risus",
            date_of_birth: "2022-11-28",
            street_number: 79,
            unit_number: null,
            street_name: "dictum.",
            city: "Columbia",
            state: "Maryland",
            country: "United States",
            zipcode: "72951",
          },
        ],
        done
      );
  });

  //tests for POST requests
  it("should create a new customer", function (done) {
    let customer = {
      first_name: "David",
      middle_name: "John",
      last_name: "Pax",
      phone_number: "617-543-2458",
      email: "David_Pax@tjx.com",
      customer_notes: "Don't call number",
      date_of_birth: "1979-07-07",
      street_number: 43,
      unit_number: "Apt 12",
      street_name: "42nd Street",
      city: "York",
      state: "NY",
      country: "US",
      zipcode: "17403",
    };
    request(app)
      .post("/api/customers") // Create new customer
      .send(customer)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201, done);
  });

  //tests for DELETE requests
  it("deletes customer with id 1", function (done) {
    request(app)
      .delete("/api/customers/1") // Remove customer
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  //tests for PUT requests
  it("updates customer with id 1", function (done) {
    let customer = {
      first_name: "Madeson",
      middle_name: "Yoshi",
      last_name: "Prince",
      phone_number: "(757) 160-5368",
      email: "consequat@protonmail.com",
      customer_notes:
        "augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu.",
      date_of_birth: "2019-12-22",
      street_number: 79,
      unit_number: null,
      street_name: "lectus",
      city: "Lewiston",
      state: "Maine",
      country: "United States",
      zipcode: "42372",
    };
    request(app)
      .put("/api/customers/1") // Modify existing customer
      .send(customer)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("tests for /api/orders", function () {
  //tests for GET requests
  it("Returns all orders", function (done) {
    request(app)
      .get("/api/orders")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("should get order with ID 2", function (done) {
    request(app)
      .get("/api/orders/2")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          order_id: 2,
          customer_id: 72,
          order_status_code: 2,
          datetime_order_placed: "2021-08-04T00:46:10.000Z",
          total_order_price: 379.62,
          order_notes: "mauris. Integer sem elit, pharetra ut",
        },
        done
      );
  });

  //tests for POST requests --
  it("should create a new order", function (done) {
    let order = {
      customer_id: 2,
      order_status_code: 2,
      datetime_order_placed: "2022-08-10 01:44:00",
      total_order_price: 14.99,
      order_notes: "no notes",
    };

    request(app)
      .post("/api/orders")
      .send(order)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201, done);
  });

  //tests for DELETE requests
  it("tries to deletes order with id 2", function (done) {
    // should NOT delete order 1 bc order is live.
    // should only be allowed to delete draft orders
    request(app)
      .delete("/api/orders/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(500, done);
  });

  it("deletes order with id 35", function (done) {
    // should delete order 2 bc order is a draft.
    // should only be allowed to delete draft orders
    request(app)
      .delete("/api/orders/35")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  //tests for PUT requests
  it("Updates an order with id of 1", function (done) {
    let order = {
      customer_id: 25,
      order_status_code: 4,
      datetime_order_placed: "2021-08-04T00:46:10.000Z",
      total_order_price: 244.28,
      order_notes: "no notes",
    };
    request(app)
      .put("/api/orders/1")
      .send(order)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("tests for /api/products", function () {
  //tests for GET requests
  it("gets all products", function (done) {
    request(app)
      .get("/api/products")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("gets product by ID", function (done) {
    request(app)
      .get("/api/products/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("gets products in bulk", function (done) {
    let bulk = {
      "product_id": [1,2]
    };
    request(app)
      .post("/api/products/bulk")
      .send(bulk)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200,[
        {
            "product_id": 1,
            "product_SKU": 154388,
            "product_price": 88.43,
            "product_name": "Quisque",
            "product_quantity": 83,
            "product_description": "luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam",
            "product_image_url": "https://nytimes.com/sub/cars"
        },
        {
            "product_id": 2,
            "product_SKU": 68077,
            "product_price": 292.15,
            "product_name": "orci.",
            "product_quantity": 16051,
            "product_description": "auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat.",
            "product_image_url": "http://ebay.com/en-ca"
        }
    ], done);
  });
  //tests for POST requests

  //tests for DELETE requests

  //tests for PUT requests
  it("updates product by ID", function (done) {
    let product = {
      //product_id:1,
      customer_id: 12,
      product_SKU: 15438,
      product_price: 88,
      product_name: "Quisque",
      product_quantity: 95,
      product_description:
        "luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam",
      product_image_url: "https://nytimes.com/sub/cars",
    };
    request(app)
      .put("/api/products/3")
      .send(product)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

/*
it("responds with 404 not found", function (done) {
  request(app);
  this.settimeout(1000)
    .get("blahblah") // GET unkown endpoint aka return 404 not found.
    .set("Accept", "application/json")
    .expect(404, done);
});
<<<<<<< HEAD
*/

describe("tests for POST and PUT for products within orders", function () {
  it("should create a new product within an order", function (done) {
    let product_in_order = {
      order_id: 1,
      product_id: 2,
      order_quantity: 20,
    };

    request(app)
      .post("/api/products_connect_orders")
      .send(product_in_order)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("Updates an order with id of 1", function (done) {
    let order_update = {
      order_quantity: 30,
    };
    request(app)
      .put("/api/products_connect_orders?order_id=4&product_id=2")
      .send(order_update)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("Updates a products quantity within an order", function (done) {
    let order_update = {
      order_quantity: 6,
    };
    request(app)
      .put("/api/products_connect_orders?order_id=17&product_id=72")
      .send(order_update)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

