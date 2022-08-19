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
  "date_of_birth": "2000-04-05",
  street_number: 21,
  unit_number: 'Apt 2A',
  street_name: 'Smith Street',
  city: 'Boston',
  state: 'MA',
  country: 'US',
  zipcode: '02125'
}

const customer2 = {
  "customer_id": 8,
  "first_name": "Sara",
  "middle_name": "SA",
  "last_name": "Anwer",
  "phone_number": "617-567-8990",
  "email": "sara_anwer@tjx.com",
  "customer_notes": "Always ship before noon",
  "date_of_birth": "1989-08-08",
  "street_number": 90,
  "unit_number": "Apt 14",
  "street_name": "Beach Street",
  "city": "Arlignton",
  "state": "MA",
  "country": "US",
  "zipcode": "02474"
}

const newCustomer = {
  "first_name": "Alexis",
  "middle_name": "Ann",
  "last_name": "Bagramian",
  "phone_number": "518-788-8098",
  "email": "alexis_bagramian@tjx.com",
  "customer_notes": "I'm new!",
  "date_of_birth": "2000-03-03",
  "street_number": 25,
  "unit_number": "Apt E7",
  "street_name": "Pine Ln",
  "city": "Albany",
  "state": "NY",
  "country": "US",
  "zipcode": "12866"
}

describe("CUSTOMERS ENDPOINTS", function() {
    it("GET / : it should has status code 200", async() => {
      const { body, status } = await request(app).get('/api/customers/');
      expect(status).to.equal(200);
    });

    it("GET /customers : it should contain customer with id 1", async() => {
      const { body, status } = await request(app).get('/api/customers/');
      expect(body).to.deep.include(customer1);
    });

    it("GET /customers/8 : it should contain only customer with id 8", async() => {
      const { body, status } = await request(app).get('/api/customers/8');
      expect(body).to.deep.include(customer2);
      expect(body.length).to.be.undefined; //undefined length means only one object was returned
    });

    it('GET /customers?last_name="Anwer" : it should contain only customer with id 8/last_name "Anwer"', async() => {
      const { body, status } = await request(app).get('/api/customers?last_name=Anwer');
      expect(body).to.deep.include(customer2);
      expect(body.length).to.equal(1); //undefined length means only one object was returned
    });
  });