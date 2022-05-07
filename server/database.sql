CREATE DATABASE houseofglamour;

SET search_path TO public;
DROP EXTENSION IF EXISTS "uuid-ossp";
CREATE EXTENSION "uuid-ossp" SCHEMA public;

--users table
CREATE TABLE users(
    user_id uuid DEFAULT uuid_generate_v4(),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    privilege VARCHAR(255) NOT NULL DEFAULT 'customer',
    created_at DATE NOT NULL DEFAULT NOW(),
    PRIMARY KEY(user_id)
);

--products table
CREATE TABLE products(
    _id SERIAL,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    image_id INT,
    qty INT NOT NULL,
    cost INT NOT NULL,
    price INT NOT NULL,
    description VARCHAR(255),
    is_active BOOLEAN NOT NULL DEFAULT 'True',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(_id),
    FOREIGN KEY(category_id) REFERENCES categories(_id)
);

CREATE TABLE categories (
    _id SERIAL,
    name VARCHAR(255) NOT NULL,
    short_desc VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    font_color VARCHAR(255),
    is_active BOOLEAN DEFAULT 'true',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--images table
CREATE TABLE images (
    _id SERIAL,
    image_name VARCHAR(255) NOT NULL,
    source VARCHAR(255) NOT NULL,
    product_id INT,
    user_id VARCHAR(255) ,
    image_url VARCHAR(255) NOT NULL,
    is_default BOOLEAN NOT NULL,
    PRIMARY KEY(_id),
    FOREIGN KEY(product_id) REFERENCES products(_id)
);

CREATE TABLE reviews (
    _id SERIAL,
    product_id SERIAL,
    user_id uuid ,
    rating FLOAT NOT NULL,
    comments VARCHAR(255),
    created_at DATE NOT NULL DEFAULT NOW(),
    is_active BOOLEAN NOT NULL DEFAULT 'true',
    FOREIGN KEY(product_id) REFERENCES products(_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    PRIMARY KEY(_id)
);

CREATE TABLE orders (
    _id SERIAL,
    user_id uuid,
    order_amount FLOAT,
    payment_id SERIAL,
    amount_paid FLOAT,
    order_date DATE NOT NULL DEFAULT NOW(),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(_id),
    --contsraint cannot be set prior payment details table is created.
    --FOREIGN KEY(payment_id) REFERENCES payment_details(_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id),
);

CREATE TABLE order_details(
    order_id SERIAL,
    product_id SERIAL,
    quantity INT NOT NULL,
    created_at DATE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(_id),
    FOREIGN KEY (product_id) REFERENCES products(_id),
);

CREATE TABLE payment_details(
    _id SERIAL,
    order_id SERIAL,
    amound FLOAT NOT NULL,
    mode VARCHAR(255) NOT NULL,
    status VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(_id),
    FOREIGN KEY(order_id) REFERENCES orders(_id)
);

ALTER TABLE orders ADD FOREIGN KEY (payment_id) REFERENCES payment_details(_id);

INSERT INTO users(first_name,last_name,email,password) VALUES ('Einstein','Bulinda','einbulinda@gmail.com','Spectre@7');