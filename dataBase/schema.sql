CREATE DATABASE caballus;
USE caballus;

CREATE TABLE horse
(
    id int NOT NULL AUTO_INCREMENT,
    age INTEGER (10) Not Null,
    gender varchar (10) NOT NULL,
    name varchar(255) NOT NULL,
    sire varchar(255) NOT NULL,
    mare varchar(255) NOT NULL,
    PRIMARY KEY (id)
);