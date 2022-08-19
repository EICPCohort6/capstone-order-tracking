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
4. To run server, run `node express\server.js` from BackEnd directory.
5. Server should be running on port 8080. Visit `https://localhost:8080` to verify.

## Current Progress
*Until we are all set up with JIRA, we will be using this README to keep track of current progress.*

Alexis, 8/16: Initialized node project within BackEnd directory so all packages can be accesed from sub folders. Set up skeleton for web server in express directory. 

Alexis, 8/17: GET customers and GET customers with specified last name endpoints are working at `https://localhost:8080/api/customers` and `https://localhost:8080/api/customers?last_name="<last name here>"`, respectively. 
