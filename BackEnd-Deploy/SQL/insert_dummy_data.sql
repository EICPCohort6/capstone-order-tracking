-- BATCH INSERT DUMMY DATA

---------------------------------
-- CSR
---------------------------------
INSERT INTO `capstone`.`csr`
(`csr_id`,
`first_name`,
`middle_name`,
`last_name`,
`phone_number`,
`email`)
VALUES
(1,
'John',
'Big',
'Madden',
111-111-1111,
'itsinthegame@gmail.com'),

(2,
'Spongebob',
'Harold',
'Squarepants',
222-222-2222,
'employeeofthemonth@gmail.com'),

(3,
'Mr',
'Money',
'Krabs',
333-333-3333,
'kurstykrabpizza@gmail.com'),

(4,
'Rolf',
'Stretch',
'Shepard',
444-444-4444,
'sonofashepard@gmail.com'),

(5,
'Yugi',
'Yami',
'Muto',
555-555-5555,
'kingofgames@gmail.com'),

(6,
'Gary',
'Rival',
'Oak',
666-666-6666,
'smellyoulater@gmail.com'),

(7,
'Shaggy',
'Norville',
'Rogers',
'777-777-7777',
'sandwichking@gmail.com'),

(8,
'Peter',
'Justin',
'Giffin',
'888-888-8888',
'birdistheword@gmail.com'),

(9,
'Homer',
'Jay',
'Simpson',
'999-999-9999',
'donutman@gmail.com')
;

---------------------------------
-- PRODUCTS
---------------------------------
INSERT INTO capstone.products (product_id, product_SKU, product_price, product_name, product_quantity, product_description)
VALUES
(1, 123456, 7.99,   "Soap",            100, "Single bar of lavendar-scented soap"),
(2, 234567, 49.99,  "Fishing Pole",    5,   "6 foot fishing pole meant for deep-sea fishing"),
(3, 345678, 23.99,  "Striped Sweater", 20,  "Women's fleece sweater with red and blue stripes"),
(4, 456789, 249.99, "Lightsaber",      2,   "Metallic lightsaber body (kyber crystal not included)"),
(5, 135791, 4.99,   "Candy Bar",       200, "Semi-sweet chocolate bar"),
(6, 246802, 49.99,  "Jeans",           25,  "Men's blue jeans"),
(7, 147036, 14.99,  "Hat",             25,  "Women's orange beanie");

---------------------------------
-- CUSTOMERS
---------------------------------
INSERT INTO capstone.customers
	(customer_id, first_name, middle_name, last_name, phone_number, email, customer_notes, date_of_birth, street_number, unit_number, street_name, city, state, country, zipcode) 
		values 
			(1, 'Zara', 'El', 'Alaoui', '781-816-0325', 'zara_elalaoui@tjx.com', 'No Notes', '2000-04-05', '21', 'Apt 2A', 'Smith Street', 'Boston', 'MA', 'US', '02125'),
            (2, 'Keith', 'KC', 'Simmons', '816-781-0322', 'keith_simmons@tjx.com', 'No Notes', '2001-02-04', '551', 'Apt 6B', 'Chelsea Street', 'Boston', 'MA', 'US', '02125'),
            (3, 'Connor', 'CF', 'French', '781-816-0654', 'connor_french@tjx.com', 'No Orders', '1969-04-05',  '10', 'Unit 1', 'Everett Street', 'Revere', 'MA', 'US', '02151'),
            (4, 'Todd', 'TO', 'Oliver', '617-219-8765', 'todd_oliver@tjx.com', 'ASAP shipping', '1942-02-01', '78', 'Unit C', 'Luke Road', 'Everett', 'MA', 'US', '02149'),
            (5, 'Erica', 'EK', 'Kelley', '556-456-0989', 'erica_kelley@tjx.com', 'None', '1960-05-13', '101', 'Apt 663', 'Davis Square', 'Somerville', 'MA', 'US', '02129'),
            (6, 'Soley', 'Graham', 'Clinton', '214-816-7854', 'soley_clinton@tjx.com', 'No notes for now', '1980-01-09', '334', 'Unit 56', 'Francis Street', 'Cambridge', 'MA', 'US', '02114'),
            (7, 'Brian', 'BC', 'Culbert', '816-781-6170', 'brian_culbert@tjx.com', 'Notes...', '1999-09-09', '65', 'Unit 45', 'Revere Beach Parkway', 'Medford', 'MA', 'US', '02145'),
            (8, 'Sara', 'SA', 'Anwer','617-567-8990', 'sara_anwer@tjx.com', 'Always ship before noon', '1989-08-08', '90', 'Apt 14', 'Beach Street', 'Arlignton', 'MA', 'US', '02474'),
            (9, 'John', 'JP', 'Paxton', '781-543-2367', 'john_paxton@tjx.com', 'Call before shipping', '1979-07-07', '87', 'Apt 16', '1st Street', 'Lynn', 'MA', 'US', '01901'),
            (10, 'Adam', 'AA', 'Audet', '214-567-5432', 'adam_audet@tjx.com', 'Add a secondary phone number', '1969-06-06', '883', 'Apt 6A', 'Adams Street', 'Swampscott', 'MA', 'US', '01907');
  
---------------------------------
-- STATUS
---------------------------------
INSERT INTO capstone.status (order_status_code, status_name)
VALUES
(1, "Draft"),
(2, "Open"),
(3, "Finalized"),
(4, "Preparing to ship"),
(5, "Ready for shipping"),
(6, "Shipped"),
(7, "Delivered"),
(8, "Closed");
  
---------------------------------
-- ORDERS
---------------------------------
INSERT INTO capstone.orders (customer_id, order_status_code, datetime_order_placed, total_order_price, order_notes)
VALUES
(1, 2, '2022-08-10 01:44:00', 14.99, 'no notes'),
(1, 1, '2022-08-12 02:30:00', 20.00, 'no notes'),
(2, 3, '2022-08-12 12:20:41', 5.99, 'replacement order'),
(3, 1, '2022-08-13 16:40:54', 110.99, 'no notes'),
(4, 2, '2022-08-14 06:22:12', 55.00, 'no notes'),
(5, 2, '2022-08-15 11:40:42', 60.00, 'no notes'),
(6, 2, '2022-08-16 05:20:11', 12.99, 'no notes'),
(6, 2, '2022-08-16 10:30:20', 60.00, 'no notes'),
(7, 2, '2022-08-16 18:21:24', 79.00, 'no notes');

---------------------------------
-- CUSTOMERS_CONNECT_CSR
---------------------------------
INSERT INTO capstone.customers_connect_csr (customers_connect_csr_id, customer_id, csr_id, ccc_timestamp)
VALUES
(1, 1, 1, '2022-08-10 01:44:00'),
(2, 1, 2, '2022-08-12 02:30:00'),
(3, 1, 4, '2022-08-12 12:20:41'),
(4, 2, 3, '2022-08-13 16:40:54'),
(5, 2, 1, '2022-08-14 06:22:12'),
(6, 3, 2, '2022-08-15 11:40:42'),
(7, 3, 1, '2022-08-16 05:20:11'),
(8, 4, 3, '2022-08-16 10:30:20');

---------------------------------
-- PRODUCTS_CONNECT_ORDERS
---------------------------------
INSERT INTO capstone.products_connect_orders (products_connect_orders_id, order_id, product_id, order_quantity)
VALUES
(1, 1, 1, 2),
(2, 1, 2, 2),
(3, 1, 4, 1),
(4, 2, 3, 1),
(5, 2, 1, 1),
(6, 3, 2, 1),
(7, 3, 1, 1),
(8, 4, 3, 1);

---------------------------------
-- PRODUCTS_CONNECT_ORDERS
---------------------------------
INSERT INTO capstone.users (username, password, access_level, csr_id)
VALUES
("John",   "Madden",  1, 1),
("Kermit", "Frog",    2, 2),
("Agent",  "Smith",   1, 3),
("Saul",   "Goodman", 2, 4),
("Walter", "White",   1, 5);
