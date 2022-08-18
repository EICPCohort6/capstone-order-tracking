const request = require('supertest');
const chai = require('chai');
const app = require("./express/server");

const { expect } = chai;

const customer1 = {
  customer_id: 1,
  first_name: 'Zara',
  middle_name: 'El',
  last_name: 'Alaoui',
  phone_number: '781-816-0325',
  email: 'zara_elalaoui@tjx.com',
  customer_notes: 'No Notes',
  street_number: 21,
  unit_number: 'Apt 2A',
  street_name: 'Smith Street',
  city: 'Boston',
  state: 'MA',
  country: 'US',
  zipcode: '02125'
}

const customer2 = {
  customer_id: 8,
  first_name: 'Sara',
  middle_name: 'SA',
  last_name: 'Anwer',
  phone_number: '617-567-8990',
  email: 'sara_anwer@tjx.com',
  customer_notes: 'Always ship before noon',
  street_number: 90,
  unit_number: 'Apt 14',
  street_name: 'Beach Street',
  city: 'Arlignton',
  state: 'MA',
  country: 'US',
  zipcode: '02474'
}

describe("CUSTOMERS ENDPOINTS", function() {
    it("it should has status code 200", async() => {

      const { body, status } = await request(app).get('/api/customers/');
      const { data } = body;
      expect(status).to.equal(200);
      expect(body).to.deep.include(customer1);
    });

    it("it should contain customer1", async() => {
      const { body, status } = await request(app).get('/api/customers/');
      const { data } = body;
      expect(body).to.deep.include(customer1);
    });

    it("it should contain only customer2", async() => {
      const { body, status } = await request(app).get('/api/customers/8');
      const { data } = body;
      expect(body).to.deep.include(customer2);
      expect(body.length).to.be.undefined; //undefined length means only one object was returned
    });
  });