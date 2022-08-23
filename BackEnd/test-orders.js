const request = require("supertest");
const chai = require("chai");
const app = require("./express/server");

const { expect } = chai;

const order1 = {
  order_id: 1,
  customer_id: 1,
  order_status_code: 2,
  datetime_order_placed: "2022-08-10T01:44:00.000Z",
  total_order_price: 14.99,
  order_notes: "no notes",
};

const order2 = {
  order_id: 8,
  customer_id: 6,
  order_status_code: 2,
  datetime_order_placed: "2022-08-16T10:30:20.000Z",
  total_order_price: 60,
  order_notes: "no notes",
};

const newOrder = {
  customer_id: 3,
  order_status_code: 4,
  datetime_order_placed: "1998-02-26",
  total_order_price: 69.5,
  order_notes: "testing newOrder",
};

describe("ORDERS ENDPOINTS", function () {
  it("GET / : it should have status code 200", async () => {
    const { body, status } = await request(app).get("/api/orders/");
    expect(status).to.equal(200);
  });

  it("GET /orders : it should contain order with id 1", async () => {
    const { body, status } = await request(app).get("/api/orders/");
    expect(body).to.deep.include(customer1);
  });

  it("GET /orders/8 : it should contain only order with id 8", async () => {
    const { body, status } = await request(app).get("/api/orders/8");
    expect(body).to.deep.include(customer2);
    expect(body.length).to.be.undefined; //undefined length means only one object was returned
  });

  // it('GET /customers?last_name="Anwer" : it should contain only customer with id 8/last_name "Anwer"', async () => {
  //   const { body, status } = await request(app).get(
  //     "/api/customers?last_name=Anwer"
  //   );
  //   expect(body).to.deep.include(customer2);
  //   expect(body.length).to.equal(1); //undefined length means only one object was returned
  // });

  it("POST /orders : it should return status code 201", async () => {
    const { body, status } = await request(app)
      .post("/api/orders")
      .send(newOrder)
      .expect(201);
  });
});
