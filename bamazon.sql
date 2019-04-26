DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mountain Bike", "Sports", 1000, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sweater", "Clothing", 30, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 1300, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Paint", "Crafts", 10, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Clean Code", "Books", 36.55, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tent", "Sports", 45.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cell Phone", "Electronics", 350, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Catan", "Games", 25, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Collar", "Pets", 12, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blue Jeans", "Clothing", 75, 12);

