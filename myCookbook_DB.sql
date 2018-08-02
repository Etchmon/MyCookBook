DROP DATABASE IF EXISTS myCookbook_DB;
CREATE DATABASE myCookbook_DB;

USE myCookbook_DB;

CREATE TABLE charachter(
  id INT NOT NULL AUTO_INCREMENT,
  character_name VARCHAR(100) NOT NULL,
  gender VARCHAR(45) NOT NULL,
  health INT default 0,
  character_level INT default 0,
  PRIMARY KEY (id)
);

CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

