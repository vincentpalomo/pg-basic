-- helps format commands for CLI

CREATE DATABASE todo_db;

-- \c into todo_db

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
); 