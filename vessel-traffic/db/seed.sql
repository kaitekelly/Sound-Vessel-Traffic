USE sound_vessel_traffic_db;

INSERT INTO ships (main_id, ship_id, imo, mmsi, ship_name, callsign, flag, ship_type_name, destination, eta, ship_length, ship_width)
VALUE (1, 4448177, 0, 338225775, "KINGFISHER", "WDE9999", "US", "Fishing Vessel", "PORT ANGELES", "2020-09-012T15:00:00", 200.5, 30.5),
(2, 1673037, 9736406, 477521600, "SEAL ISLAND", "VRTB6", "HK", "Cargo Bulk Carrier", "SEATTLE", "2020-09-012T14:00:00", 176.5, 28.8),
(3, 686825, 9198109, 477274700, "OOCL NEW YORK", "VRJS2", "HK", "Cargo Container Ship", "SEATTLE", "2020-09-012T15:30:00", 277.23, 40);

INSERT INTO trips (sail_date_id, start_destination, end_destination, start_sail_date, end_sail_date)
VALUE (1, "Vashon Island", "Kayak Point", "2020-09-12", "2020-09-12")