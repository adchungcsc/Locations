/*  cockroach sql --insecure --host=localhost:26259 < Locations.sql */
CREATE TABLE Locations (
    locationID SERIAL NOT NULL,
    locationName varchar(255) NOT NULL,
    description varchar(512) NOT NULL,
    latitude float,
    longitude float,
    PRIMARY KEY (locationID)
);