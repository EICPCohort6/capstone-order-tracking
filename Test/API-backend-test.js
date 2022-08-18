const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = require('../BackEnd/Express/server'); // express();

describe('GET /api/customers', function() {
    it('responds with json', function(done) {
        request(app)
            .get('/api/customers') // 'http://localhost:8080/api/customers'
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('customer ID 1 first_name is Zara', function(done) {
        request(app)
            .get('/api/customers/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, {
                id: 1,
                first_name: 'Zara'
            }, done);
    });

});


