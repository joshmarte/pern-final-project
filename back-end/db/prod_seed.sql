INSERT INTO test (name) VALUES
('Monday'),
('Tuesday'),
('Wednesday'),
('Thursday'),
('Friday'),
('Saturday'),
('Sunday');

-- heroku pg:psql postgresql-defined-66539 --app jm-cta-be
-- \i ./back-end/db/prod_schema.sql
-- \i ./back-end/db/prod_seed.sql
-- https://jm-cta-be.herokuapp.com/