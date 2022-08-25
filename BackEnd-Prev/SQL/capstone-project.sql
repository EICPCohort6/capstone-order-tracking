drop schema if exists capstone;

create schema capstone;

use capstone;

CREATE TABLE `customers` (
  `customer_id`    int PRIMARY KEY AUTO_INCREMENT,
  `first_name`     varchar(255) NOT NULL,
  `middle_name`    varchar(255),
  `last_name`      varchar(255) NOT NULL,
  `phone_number`   varchar(255),
  `email`          varchar(255) NOT NULL,
  `customer_notes` varchar(255),
  `date_of_birth`  date NOT NULL,
  `street_number`  int NOT NULL,
  `unit_number`    varchar(255),
  `street_name`    varchar(255) NOT NULL,
  `city`           varchar(255) NOT NULL,
  `state`          varchar(255) NOT NULL,
  `country`        varchar(255) NOT NULL,
  `zipcode`        varchar(255) NOT NULL
);

CREATE TABLE `orders` (
  `order_id`              int PRIMARY KEY AUTO_INCREMENT,
  `customer_id`           int,
  `order_status_code`     int NOT NULL,
  `datetime_order_placed` datetime NOT NULL,
  `total_order_price`     float NOT NULL,
  `order_notes`           varchar(255)
);

CREATE TABLE `products` (
  `product_id`          int PRIMARY KEY AUTO_INCREMENT,
  `product_SKU`         int NOT NULL,
  `product_price`       float NOT NULL,
  `product_name`        varchar(255) NOT NULL,
  `product_quantity`    int NOT NULL,
  `product_description` varchar(255),
  `product_image_url`   varchar(255)
);

CREATE TABLE `CSR` (
  `csr_id`       int PRIMARY KEY AUTO_INCREMENT,
  `first_name`   varchar(255) NOT NULL,
  `middle_name`  varchar(255),
  `last_name`    varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `email`        varchar(255) NOT NULL
);

CREATE TABLE `products_connect_orders` (
  `products_connect_orders_id` int PRIMARY KEY AUTO_INCREMENT,
  `order_id`                   int NOT NULL,
  `product_id`                 int NOT NULL,
  `order_quantity`             int NOT NULL
);

CREATE TABLE `status` (
  `order_status_code` int PRIMARY KEY AUTO_INCREMENT,
  `status_name`       varchar(255) NOT NULL
);

CREATE TABLE `customers_connect_csr` (
  `customers_connect_csr_id` int PRIMARY KEY AUTO_INCREMENT,
  `customer_id`              int,
  `csr_id`                   int NOT NULL,
  `ccc_timestamp`            datetime NOT NULL
);

CREATE TABLE `users` (
  `user_id`      int PRIMARY KEY AUTO_INCREMENT,
  `username`     varchar(255) NOT NULL,
  `password`     varchar(255) NOT NULL,
  `access_level` int NOT NULL,
  `csr_id`       int NOT NULL
);

ALTER TABLE `users`                   ADD FOREIGN KEY (`csr_id`)            REFERENCES `CSR`       (`csr_id`);																	        
ALTER TABLE `orders`                  ADD FOREIGN KEY (`customer_id`)       REFERENCES `customers` (`customer_id`);
ALTER TABLE `products_connect_orders` ADD FOREIGN KEY (`order_id`)          REFERENCES `orders`    (`order_id`);
ALTER TABLE `products_connect_orders` ADD FOREIGN KEY (`product_id`)        REFERENCES `products`  (`product_id`);
ALTER TABLE `orders`                  ADD FOREIGN KEY (`order_status_code`) REFERENCES `status`    (`order_status_code`);
ALTER TABLE `customers_connect_csr`   ADD FOREIGN KEY (`customer_id`)       REFERENCES `customers` (`customer_id`);																        
ALTER TABLE `customers_connect_csr`   ADD FOREIGN KEY (`csr_id`)            REFERENCES `CSR`       (`csr_id`);


