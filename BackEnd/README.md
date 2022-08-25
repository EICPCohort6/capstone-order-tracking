# BACK-END

### Team Members

#### Engineers
* Abdur-rahman Tariq
* Alexandra Brandl
* Alexis Bagramian
* Uzi Ahmad

#### Analysts
* Alexander MacDowall
* Alexandra Napoleon
* Anna Truong
* Baily McNeill


## How To Run

1. Clone repository
2. In BackEnd directory, run `npm install` to install all necessary packages
3. Ensure no other application is running on port 8080.
4. To run server, run `npm start` from BackEnd directory.
5. Server should be running on port 8080. Visit `https://localhost:8080` to verify.

## Current Progress


_Until we are all set up with JIRA, we will be using this README to keep track of current progress._

Alexis, 8/16: Initialized node project within BackEnd directory so all packages can be accesed from sub folders. Set up skeleton for web server in express directory.

Uzi & Abdur, 8/16: Configured server, database and sequelize on the back end with server running

Alexis, 8/17: GET customers and GET customers with specified last name endpoints are working at `https://localhost:8080/api/customers` and `https://localhost:8080/api/customers?last_name="<last name here>"`, respectively.

Uzi, 8/17: Defined routes and controller for CRUD operations based on API Endpoints

Alexis, 8/18: The following endpoints are working:

```
GET all customers http://localhost:8080/api/customers

GET customer by id http://localhost:8080/api/customers/<id>

GET customer by last name http://localhost:8080/api/customers?last_name="<last name>"

GET all orders http://localhost:8080/api/orders

GET order by id http://localhost:8080/api/orders/<id>

POST order http://localhost:8080/api/orders

DELETE order http://localhost:8080/api/orders
```

Began writing unit tests for customer endpoints.

Abdur, 19/08: Completed products model and routes for corresponding API endpoints

Uzi, 19/08: Consulted with Front-end team to test retrieval of data using API, fixed errors and implemented additional configuration on server, result: retrieval successful

------ WEEKEND -------

Uzi & Abdur, 22/08: Implemented models corresponding to the rest of the tables, including CSR, customers_connect_csr table,

