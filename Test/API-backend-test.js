const request = require("supertest");
const assert = require("assert");
const express = require("express");

const app = require("../BackEnd/Express/server"); // express();

describe("tests for /api/customers", function () {
  //tests for GET requests
  it("responds with json", function (done) {
    request(app)
      .get("/api/customers") // GET all customers
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("should get customer with ID 1", function (done) {
    request(app)
      .get("/api/customers/1") // GET specific customer by ID
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          customer_id: 1,
          first_name: 'Madeson',
          middle_name: 'Yoshi',
          last_name: 'Prince',
          phone_number: '(757) 160-5368',
          email: 'consequat@protonmail.com',
          customer_notes: 'augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu.',
          date_of_birth: '2019-12-22',
          street_number: 79,
          unit_number: null,
          street_name: 'lectus',
          city: 'Lewiston',
          state: 'Maine',
          country: 'United States',
          zipcode: '42372'
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
      date_of_birth: '1979-07-07',
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

      first_name: 'Madeson',
      middle_name: 'Yoshi',
      last_name: 'Prince',
      phone_number: '(757) 160-5368',
      email: 'consequat@protonmail.com',
      customer_notes: 'augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu.',
      date_of_birth: '2019-12-22',
      street_number: 79,
      unit_number: null,
      street_name: 'lectus',
      city: 'Lewiston',
      state: 'Maine',
      country: 'United States',
      zipcode: '42372'
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

  it("should get order with ID 1", function (done) {
    request(app)
      .get("/api/orders/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          order_id: 1,
          customer_id: 25,
          order_status_code: 4,
          datetime_order_placed: "2021-08-04T00:46:10.000Z",
          total_order_price: 244.28,
          order_notes: "enim nisl",
        },
        done
      );
  });

  //tests for POST requests
  it("should create a new order", function (done) {
    let order = {
      customer_id: 1,
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
  it("tries to deletes order with id 1", function (done) {
    // should NOT delete order 1 bc order is live.
    // should only be allowed to delete draft orders
    request(app)
      .delete("/api/orders/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(500, done);
  });

  it("deletes order with id 2", function (done) {
    // should delete order 2 bc order is a draft.
    // should only be allowed to delete draft orders
    request(app)
      .delete("/api/orders/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  //tests for PUT requests
  it('Updates and order with id of 1', function(done) {
    let order = {
      customer_id: 1,
      order_status_code: 2,
      datetime_order_placed: "2022-08-10 01:44:00",
      total_order_price: 14.99,
      order_notes: "no notes",
    }

    request(app)
      .put('/api/orders/1')
      .send({order})
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

  //tests for POST requests

  //tests for DELETE requests

  //tests for PUT requests
  it("updates product by ID", function (done) {
    let product = {
      //product_id:1,
      product_SKU: 123456,
      product_price: 7.99,
      product_name: "Dove Soap",
      product_quantity: 100,
      product_description: "Single bar of lavendar-scented soap",
      product_image_url: null,
    };
    request(app)
      .put("/api/products/1")
      .send({ product })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

});



it("responds with 404 not found", function (done) {
  request(app)
    .get("blahblah") // GET unkown endpoint aka return 404 not found.
    .set("Accept", "application/json")
    .expect(404, done);
});