const request = require("supertest");
const chai = require("chai");
const app = require("./express/server");

const { expect } = chai;

const product1 = {
  product_id: 1,
  product_SKU: 123456,
  product_price: 7.99,
  product_name: "Soap",
  product_quantity: 100,
  product_description: "Single bar of lavendar-scented soap",
  product_image_url: null,
};

const product2 = {
  product_id: 7,
  product_SKU: 147036,
  product_price: 14.99,
  product_name: "Hat",
  product_quantity: 25,
  product_description: "Women's orange beanie",
  product_image_url: null,
};

const newProduct = {
  product_SKU: 248135,
  product_price: 19.99,
  product_name: "New Hat",
  product_quantity: 35,
  product_description: " New Women's orange beanie",
  product_image_url: null,
};

describe("PRODUCTS ENDPOINTS", function () {
  it("GET / : it should have status code 200", async () => {
    const { body, status } = await request(app).get("/api/products/");
    expect(status).to.equal(200);
  });

  it("GET /products : it should contain product with id 1", async () => {
    const { body, status } = await request(app).get("/api/products/");
    expect(body).to.deep.include(product1);
  });

  it("GET /products/7 : it should contain only product with id 7", async () => {
    const { body, status } = await request(app).get("/api/products/7");
    expect(body).to.deep.include(product2);
    expect(body.length).to.be.undefined; //undefined length means only one object was returned
  });
});
