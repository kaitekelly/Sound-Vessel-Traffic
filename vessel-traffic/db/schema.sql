DROP DATABASE IF EXISTS sound_vessel_traffic_db;


CREATE DATABASE sound_vessel_traffic_db;
USE sound_vessel_traffic_db;

CREATE TABLE traffic
(
    id int NOT NULL AUTO_INCREMENT,
    shid_id INT,
    imo INT,
    mmsi INT,
    ship_name letchar(300) NOT NULL,
    callsign letchar(300) NOT NULL,
    flag letchar(300) NOT NULL,
    ship_type_name letchar(300) NOT NULL,
    destination letchar(300) NOT NULL,
    eta letchar(300) NOT NULL
    ship_length INT,
    ship_width INT
    PRIMARY KEY (id)
); 