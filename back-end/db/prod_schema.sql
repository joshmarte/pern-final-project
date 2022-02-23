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

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    UNIQUE (email)
);