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
  email VARCHAR(30) NOT NULL,
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

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- alt tables that are working now --

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
    eta char(255),
    ship_length INT,
    ship_width INT,
	PRIMARY KEY (main_id)
); 
CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  PRIMARY KEY (user_id)  
);
CREATE TABLE trips (
  sail_date_id INT NOT NULL AUTO_INCREMENT,
  start_destination VARCHAR(30) NOT NULL,
  end_destination VARCHAR(30) NOT NULL,
  start_sail_date DATE NULL,
  end_sail_date DATE NULL,
main_id int,
  PRIMARY KEY (sail_date_id),
FOREIGN KEY (main_id) references ships(main_id)
);
USE sound_vessel_traffic_db;
INSERT INTO ships (main_id, ship_id, imo, mmsi, ship_name, callsign, flag, ship_type_name, destination, eta, ship_length, ship_width)
VALUE (1, 4448177, 0, 338225775, "KINGFISHER", "WDE9999", "US", "Fishing Vessel", "PORT ANGELES", "2020-09-012T15:00:00", 200.5, 30.5),
(2, 1673037, 9736406, 477521600, "SEAL ISLAND", "VRTB6", "HK", "Cargo Bulk Carrier", "SEATTLE", "2020-09-012T14:00:00", 176.5, 28.8),
(3, 686825, 9198109, 477274700, "OOCL NEW YORK", "VRJS2", "HK", "Cargo Container Ship", "SEATTLE", "2020-09-012T15:30:00", 277.23, 40),
(4, 427657, 7129477, 366811310, "JAMES T.QUIGG", "WDA4612", "US", "Tug", "TACOMA", "2020-09-012T06:15:00", 30.46, 8.99),
(5, 4836536, 9835812, 367770980, "BILL GOBEL", "WDJ3749", "US", "Pusher Tug", "SEATTLE", "2020-09-012T09:48:00", 147, 22),
(6, 408089, 9408877, 636018038, "NAVIOS CONSTELLATION", "D5NX3", "LR", "Container Ship", "SEATAC", "2020-09-012T09:00:00", 349.65, 45.6),
(7, 3474037, 9704984, 374008000, "MSC NAOMI", "3FRZ7", "PA", "Container Ship", "SEATTLE", "2020-09-012T10:00:00", 299.97, 48.22),
(8, 426951, 9188582, 366764740, "CHIEF", "WCZ2047", "US", "Tug", "SEATTLE", "2020-09-012T07:23:00", 31.39, 10.9),
(9, 444962, 7947659, 367527010, "DEFENDER", "WDF2949", "US", "Fishing Vessel", "SHILSHOLE", "2020-09-012T121:43:00", 76, 17),
(10, 457247, 6710920, 369960000, "FAIRWEATHER", "WTEB", "US", "Research/Survey Vessel", "SEATTLE", "2020-09-012T12:56:00", 60.35, 13.06),
(11, 685294, 9290892, 477070400, "ELIZABETH RIVER", "VRBJ5", "HK", "Cargo Bulk Carrier", "SEATTLE", "2020-09-012T11:34:00", 189.99, 32.26),
(12, 436493, 8034875, 367083650, "HARVESTOR", "WDC8229", "US", "Fishing Vessel", "PORT ANGELS", "2020-09-012T21:57:00", 34, 7.93),
(13, 452269, 6605254, 368661596, "WYCLIFFE", "WDH3985", "US", "Tug", "SEATTLE", "2020-09-012T09:56:00", 37.04, 9.76),
(14, 123976, 9589255, 210104000, "PEDHOULAS BUILDER", "5BQJ3", "CY", "Cargo Bulk Carrier", "SEATTLE", "2020-09-012T11:55:00", 229, 32.56),
(15, 436536, 8812265, 367084450, "FORUM STAR", "WDC8278", "US", "Fishing Trawler", "KETCHKAN", "2020-09-012T14:56:00", 29.27, 7.77),
(16, 715665, 8988870, 319107100, "CV 9", "ZGGD5", "KY", "Fish Factory", "SEATTLE WA", "2020-09-012T13:38:00", 40, 7.92),
(17, 3539998, 9747546, 477301400, "JING JIN HAI", "VROT5", "HK", "Cargo Bulk Carrier", "SEATTLE", "2020-09-012T12:09:00", 225, 32.26),
(18, 428324, 8981987, 366867690, "CONTROLLER BAY", "WDG5470", "US", "Pusher Tug", "SHILSHOLE", "2020-09-012T17:42:00", 27.43, 8.81),
(19, 454650, 7437783, 368380000, "ALYESKA", "WCX8749", "US", "Fishing Vessel", "SHILSHOLE", "2020-09-012T22:36:00", 37.04, 10),
(20, 432101, 8812849, 366993010, "WESTRAC", "WTH4325", "US", "Tug", "EAGLE", "2020-09-012T16:41:00", 23.17, 8.54),
(21, 5845970, 9786023, 636018880, "YANGZE NAVIGATION", "D5RU9", "LR", "Cargo Bulk Carrier", "SEATTLE", "2020-09-012T12:22:00", 229, 32.26),
(22, 426851, 9188556, 366759530, "GUIDE", "WDE7328", "US", "Tug", "TACOMA", "2020-09-012T13:48:00", 29.47, 10.97),
(23, 448825, 8602309, 368128470, "GULF RANGER", "WDL4134", "US", "Multi Purpose Offshore Vessel", "TACOMA", "2020-09-012T19:32:00", 43.28, 10),
(24, 455438, 8034875, 369001000, "CAPE FLATTERY", "WDA7384", "US", "Pusher Tug", "BERINGSEA", "2020-09-012T13:48:00", 60, 16),
(25, 386706, 8981793, 367744660, "POSEIDON", "WDI9041", "US", "Houseboat", "BALLARD LOCKS", "2020-09-012T16:21:00", 28, 6.7),
(26, 439862, 9835812, 367255000, "POLAR STAR", "WDJ3749", "US", "Icebreaker Tug", "SEATTLE", "2020-09-012T11:48:00", 121.62, 25.33),
(27, 446973, 8978667, 367478830, "WILDERNESS ADVENTURER", "WDF6885", "US", "Ro-Ro/Passenger Ship", "SEATTLE", "2020-09-012T14:15:00", 39.88, 10.52),
(28, 431367, 8219011, 366979360, "ARTHUR FOSS", "WRB5693", "US", "Tug", "SEATTLE", "2020-09-012T09:22:00", 31.01, 11.58),
(29, 1699865, 8883563, 367645050, "KITTITAS", "WYQ9302", "US", "Ro-Ro/Passenger Ship", "MUKILTEO", "2020-09-012T17:33:00", 100, 24),
(30, 429887, 7427477, 368045710, "LUTHER", "WDK3484", "US", "Pusher Tug", "SEATTLE", "2020-09-012T15:42:00", 31.78, 9.76),
(31, 433497, 8890310, 367741120, "A J", "WDI8684", "US", "Tug", "PORT ANGELES", "2020-09-012T13:43:00", 29.26, 9.14),
(32, 426713, 9137351, 366749710, "WENATCHEE", "WCY3378", "US", "Ro-Ro/Passenger Ship", "WSF TERMINAL", "2020-09-012T17:40:00", 140.25, 27.37),
(33, 431497, 8971877, 366982320, "MARSHALL FOSS", "WDB9762", "US", "Tug", "SEATTLE", "2020-09-012T13:26:00", 29.87, 12),
(34, 4840336, 9801770, 367712660, "CHIMACUM", "WDI5854", "US", "Ro-Ro/Passenger Ship", "SEATTLE", "2020-09-012T14:00:00", 110, 28.8),
(35, 445502, 8856613, 367445470, "CAPE GREIG", "WDF3906", "US", "Fishing Vessel", "BELLINGHAM", "2020-09-012T20:43:00", 53.25, 9.14),
(36, 433726, 8992962, 367005070, "CHIEF SEATTLE", "VTTM4", "HK", "Fire Fighting Vessel", "VASHON", "2020-09-012T17:32:00", 29, 8),
(37, 455459, 8346962, 369021000, "SWIFT ARROW", "WAFK", "US", "Port Tender", "VASHON", "2020-09-012T18:39:00", 14, 4),
(38, 445543, 8632962, 367446340, "OASIS", "WDF3973", "US", "Pleasure Craft", "BALLARD LOCKS", "2020-09-012T20:26:00", 33, 8);
INSERT INTO trips (sail_date_id, start_destination, end_destination, start_sail_date, end_sail_date)
VALUE (1, "Vashon Island", "Kayak Point", "2020-09-12", "2020-09-12")