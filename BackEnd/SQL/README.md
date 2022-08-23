# Database and Analytics Team: Database Structure for an "Order Tracking" application

## Instructions: 
To create the database locally, do the following: 
  - Clone the repository to your local machine.
  - Open the SQL folder in a local instance of workbench.
  - Run the **capstone-project.sql** file to create the tables. 
  - Next, run the **insert_dummy_dataV2.sql** file to insert mock data for testing. 


## Folder and File Structure:

In the **Backend** folder, there is the **SQL** folder in which there are 3 files. One to create the tables, one to insert the mock data and one that contains test queries as the following:

<pre>
- BackEnd                 # Backend files 
  - Express              
  - Node              
  - SQL                   # Contains database files
    - capstone-project.sql                 # Contains Data Definition Language of the database
    - capstone-query-tests.sql             # Contains tests queries
    - insert_dummy_data.sql                # Contains dummy data. 
- FrontEnd                # Frontend files
    - CSS                 # CSS files 
    - HTML                # HTML files
    - JS                  # JS files
</pre>

## Database Dictionary: 

To support the order tracking application, we built the following database structure: 

- **CSR: Customer Service Representative table.**
  - Contains information about customer service representatives 
  <pre>
    - <b>Csr_id:</b> A primary key of <b>int</b> datatype that represents a unique ID for each customer service representative. 
    - <b>First_name:</b> A non nullable key of <b>varchar</b> datatype that holds values for the first names of customer service representatives.
    - <b>Middle_name:</b> A key of <b>varchar</b> datatype that holds values for the middle names of customer service representatives.
    - <b>Last_name:</b> A non nullable key of <b>varchar</b> datatype that holds values for the middle names of customer service representatives.
    - <b>Phone_number:</b> A non nullable key of <b>varchar</b> datatype that holds values for the phone numbers of customer service representatives.
    - <b>Email:</b> A non nullable key of <b>varchar</b> datatype that holds values for the emails of customer service representatives. 
  </pre>

- **Customers:**
  - Contains information about customers. 
  <pre>
    - <b>Customer_id:</b> A primary key of <b>int</b> datatype that represents a unique ID for each customer. 
    - <b>First_name:</b> A non nullable key of <b>varchar</b> datatype that holds values for the first names of customers. 
    - <b>Middle_name:</b> A key of <b>varchar</b> datatype that holds values for the middle names of customers. 
    - <b>Last_name:</b> A non nullable key of <b>varchar</b> datatype that holds values for the middle names of customers. 
    - <b>Phone_number:</b> A key of <b>varchar</b> datatype that holds values for the phone numbers of customers. 
    - <b>Email:</b> A non nullable key of <b>varchar</b> datatype that holds values for the emails of customers. 
    - <b>Customer_notes:</b> A key of <b>varchar</b> datatype that holds values for customer notes. 
    - <b>Date_of_birth:</b> A key of <b>varchar</b> datatype that holds values for date of birth of customers. 
    - <b>Street_number:</b> A non nullable key of <b>int</b> datatype that holds values for street numbers for the address. 
    - <b>Unit_number:</b> A key of <b>varchar</b> datatype that holds values for unit numbers. 
    - <b>Street_name:</b> A non nullable key of <b>varchar</b> datatype that holds values for street names. 
    - <b>City:</b> A non nullable key of <b>varchar</b> datatype that holds values for city names. 
    - <b>State:</b> A non nullable key of <b>varchar</b> datatype that holds values for state names.
    - <b>Country:</b> A non nullable key of <b>varchar</b> datatype that holds values for country names.
    - <b>Zipcode:</b> A non nullable key of <b>varchar</b> datatype that holds values for zipcodes. 
  </pre>

- **Orders:**
  - Contains information about orders.
  <pre>
    - <b>Order_id:</b> A primary key of <b>int</b> datatype that represents a unique ID for each order.
    - <b>Customer_id:</b> A foreign key from <b>customers</b> table of <b>int</b> datatype that represents a unique ID for each customer.
    - <b>Order_status_code:</b> A non nullable key of <b>int</b> datatype that represents the status of an order. 
    - <b>Datetime_order_placed:</b> A non nullable key of <b>datetime</b> datatype that holds values for datetimes of when orders are being placed. 
    - <b>Total_order_price:</b> A non nullable key of <b>float</b> datatype that holds values for the total price of orders. 
    - <b>Order_notes:</b> A key of <b>varchar</b> datatype that holds values for order notes. 
  </pre>
  
- **Products:**
  - Contains information about products.
  <pre>
    - <b>Product_id:</b> A primary key of <b>int</b> datatype that represents a unique ID for each product. 
    - <b>Product_SKU:</b> A non nullable key of <b>int</b> datatype that hold values for the SKU code of each product. 
    - <b>Product_price:</b> A non nullable key of <b>float</b> datatype that hold values for the prices of products. 
    - <b>Product_name:</b> A non nullable key of <b>varchar</b> datatype that hold values for the names of products. 
    - <b>Product_quantity:</b> A non nullable key of <b>int</b> datatype that hold values for the quantity of products available. 
    - <b>Product_description:</b> A key of <b>varchar</b> datatype that hold values for the descriptions of products. 
    - <b>Product_image_url:</b> A key of <b>varchar</b> datatype that hold values for the URL of images of products. 
  </pre>

- **Status:**
  - Contains information about status of orders.
  <pre>
    - <b>Order_status_code:</b> A primary key of <b>int</b> datatype that represents a unique status code for each status. 
    - <b>Status_name:</b> A non nullable key of <b>varchar</b> datatype that holds values of status names. 
  </pre>

- **Customers_connect_csr:**
  - Connecting table between customers table and customer service representatives table.
  <pre>
    - <b>Customers_connect_csr_id:</b> A primary key of <b>int</b> datatype that represents a unique ID for each connection between customers table and csr table. 
    - <b>Customer_id:</b> A foreign key from <b>customers</b> table of <b>int</b> datatype that represents a unique ID for each customer.
    - <b>Csr_id:</b> A foreign key from <b>csr</b> table of <b>int</b> datatype that represents a unique ID for customer service representative. 
    - <b>Ccc_timestamp: </b> A non nullable key of <b>datetime</b> datatype that hold values for the timestamp of when a customer service representative provides service to a customer. 
  </pre>

- **Products_connect_orders:**
  - Connecting table between products table and orders table.
  <pre> 
    - <b>Products_connect_orders_id:</b> A primary key of <b>int</b> datatype that represents a unique ID for each connection between products table and orders table. 
    - <b>Order_id:</b> A foreign key from <b>orders</b> table of <b>int</b> datatype that represents a unique ID for each order.
    - <b>Product_id:</b> A foreign key from <b>products</b> table of <b>int</b> datatype that represents a unique ID for each product.
    - <b>Order_quantity:</b> A non nullable key of <b>int</b> datatype that hold values for the quantity of products in each order. 
  </pre>
  
- **Users:**
  - Table that holdx information about people who log in to the website
  <pre>
    - <b>User_id:</b> A primary key of <b>int</b> datatype that represents a unique ID for each user. 
    - <b>Username:</b> A non nullable key of <b>varchar</b> datatype that represents usernames of users.
    - <b>Password:</b> A non nullable from key of <b>varchar</b> datatype that represents passwords of users.
    - <b>Access_level:</b> A non nullable key of <b>int</b> datatype that represents access level of each user. 
    - <b>Csr_id:</b> A non nullable foreign key of <b>int</b> datatype from <b>csr</b> table that represents a unique ID for each csr member. 
  </pre>
