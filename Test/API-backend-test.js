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

  it("customer ID 1 first_name is Zara", function (done) {
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

  // it('customer ID "hello" returns 400 bad request', function(done) {
  //     request(app)
  //         .get(`/api/customers/"hello"`)
  //         .set('Accept', 'application/json')
  //         .expect(400, done)
  // });
});
