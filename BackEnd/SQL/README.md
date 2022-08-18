# Database and Analytics Team: Database Structure for an "Order Tracking" application

## Instructions: 
To create the database locally, do the following: 
  - Clone the repository to your local machine.
  - Open the SQL folder in a local instance of workbench.
  - Run the **capstone-project.sql** file to create the tables. 
  - Next, run the **insert_dummy_data.sql** file to insert mock data for testing. 


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

- CSR: Customer Service Representative table. 
  - Contains information about customer service representatives 
  <pre>
    - <b>Csr_id:</b> A primary key of **int** datatype that represents a unique ID for each customer service representative. 
    - <b>First_name:</b> A non nullable key of **varchar** datatype that holds values for the first names of customer service representatives.
    - <b>Middle_name:</b> A key of **varchar** datatype that holds values for the middle names of customer service representatives.
    - <b>Last_name:</b> A non nullable key of **varchar** datatype that holds values for the middle names of customer service representatives.
    - <b>Phone_number:</b> A non nullable key of **varchar** datatype that holds values for the phone numbers of customer service representatives.
    - <b>Email:</b> A non nullable key of **varchar** datatype that holds values for the emails of customer service representatives. 
  </pre>

- Customers: 
  - Contains information about customers. 
