const request = require("supertest");
const assert = require("assert");
const express = require("express");

const app = require("../BackEnd/Express/server"); // express();

describe("GET /api/customers", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/api/customers") // 'http://localhost:8080/api/customers'
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("responds with 404 not found", function (done) {
    request(app)
      .get("blahblah")
      .set("Accept", "application/json")
      //.expect('Content-Type', /json/)
      .expect(404, done);
  });

  it("should get customer with ID 1", function (done) {
    request(app)
      .get("/api/customers/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          customer_id: 1,
          first_name: "Zara",
          middle_name: "El",
          last_name: "Alaoui",
          phone_number: "781-816-0325",
          email: "zara_elalaoui@tjx.com",
          customer_notes: "No Notes",
          street_number: 21,
          unit_number: "Apt 2A",
          street_name: "Smith Street",
          city: "Boston",
          state: "MA",
          country: "US",
          zipcode: "02125",
        },
        done
      );
  });

  it("should get customer with last name Paxton", function (done) {
    request(app)
      .get("/api/customers?last_name=Paxton")
      //.query('last_name=Paxton')
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        [
          {
            //brackets because since last name isn't unique, API
            //returns a list instead of a single object like with ID
            customer_id: 9,
            first_name: "John",
            middle_name: "JP",
            last_name: "Paxton",
            phone_number: "781-543-2367",
            email: "john_paxton@tjx.com",
            customer_notes: "Call before shipping",
            street_number: 87,
            unit_number: "Apt 16",
            street_name: "1st Street",
            city: "Lynn",
            state: "MA",
            country: "US",
            zipcode: "01901",
          },
        ],
        done
      );
  });
});

describe("GET /api/orders/1", function () {
  it("should get order with ID 1", function (done) {
    request(app)
      .get("/api/orders/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          order_id: 1,
          customer_id: 1,
          order_status_code: 2,
          datetime_order_placed: "2022-08-10T01:44:00.000Z",
          total_order_price: 14.99,
          order_notes: "no notes",
        },
        done
      );
  });
});

describe("POST /api/orders", function () {
  it("should create a new customer", function (done) {
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
      .expect(200, done);
  });
});

describe("GET /api/orders", function () {
  it("Returns all orders", function (done) {
    request(app)
      .get("/api/orders")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("Delete /api/orders/1", function () {
  it("deletes order with id 1", function (done) {
    request(app)
      .delete("/api/orders/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
