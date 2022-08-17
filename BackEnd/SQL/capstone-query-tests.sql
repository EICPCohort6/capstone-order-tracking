-- Query order status code
-- SELECT order_status_code FROM customers INNER JOIN orders ON orders.customer_id = customers.customer_id

-- Query Relationships test
-- SELECT p.order_quantity, p.order_id, p.product_id, o.customer_id FROM products_connect_orders p INNER JOIN orders o ON o.order_id = p.order_id

-- Query Relationships test 2
-- SELECT c.customer_id, c.first_name, c.last_name, o.order_id, o.order_status_code, s.status_name FROM customers c, orders o, status s WHERE c.customer_id = o.customer_id AND o.order_status_code = s.order_status_code;

-- Quick and easy db query cause reasons
SELECT * from customers