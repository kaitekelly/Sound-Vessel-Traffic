DROP DATABASE IF EXISTS sound_vessel_traffic_db;

CREATE DATABASE sound_vessel_traffic_db;
USE sound_vessel_traffic_db;

CREATE TABLE ships (
    main_id int NOT NULL AUTO_INCREMENT,
    ship_id INT,
    imo INT,
    mmsi INT,
    ship_name varchar(255) NOT NULL,
    callsign varchar(255) NOT NULL,
    flag varchar(255) NOT NULL,
    ship_type_name varchar(255) NOT NULL,
    destination varchar(255),
    eta DATETIME NOT NULL,
    ship_length INT,
    ship_width INT,
	PRIMARY KEY (main_id)
); 

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  PRIMARY KEY (user_id)  
);

CREATE TABLE trips (
  sail_date_id INT NOT NULL AUTO_INCREMENT,
  start_destination VARCHAR(30) NOT NULL,
  end_destination VARCHAR(30) NOT NULL,
  start_sail_date DATETIME NOT NULL references ships(eta) ON DELETE SET NULL ON UPDATE CASCADE,
  end_sail_date DATETIME NOT NULL ,
  PRIMARY KEY (sail_date_id)
);
