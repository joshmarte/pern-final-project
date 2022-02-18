DROP DATABASE IF EXISTS birds_dev;
CREATE DATABASE birds_dev;

\c birds_dev;

DROP TABLE IF EXISTS birds;

CREATE TABLE birds (
    id SERIAL PRIMARY KEY, 
    common_name VARCHAR,
    scientific_name TEXT,
    description TEXT,
    rating INTEGER CHECK(rating >= 0 AND rating <=5),
    price NUMERIC,
    featured BOOLEAN,
    image TEXT,
    audio TEXT
);