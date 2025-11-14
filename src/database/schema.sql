
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE county (
    countycode VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE city (
    postalcode VARCHAR(15) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    countycode VARCHAR(10) REFERENCES county(countycode) ON DELETE RESTRICT
);

CREATE TABLE client (
    clientuuid UUID PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL CHECK (username ~ '^[A-Za-z_][A-Za-z0-9._]*$'),
    email VARCHAR(255) UNIQUE NOT NULL,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30),
    phonenumber VARCHAR(20) DEFAULT NULL,  
    isSuspended BOOLEAN DEFAULT FALSE,
    suspensionLength INTEGER DEFAULT NULL,
    suspensionStartDateTime TIMESTAMP DEFAULT NULL,
    dateJoined DATE NOT NULL DEFAULT CURRENT_DATE,
    subscriptionStartDateTime TIMESTAMP DEFAULT NULL,
    subscriptionEndDateTime TIMESTAMP DEFAULT NULL,
    provider VARCHAR(50),
    providerId VARCHAR(255)    
);


CREATE INDEX idx_client_email ON client(email);
CREATE INDEX idx_client_username ON client(username);

CREATE TABLE address (
    clientuuid UUID PRIMARY KEY REFERENCES client(clientuuid) ON DELETE CASCADE,
    streetname VARCHAR(255) NOT NULL,
    streetnumber VARCHAR(10) NOT NULL CHECK (streetnumber ~ '^[0-9]+[A-Za-z]?$'),
    aptnumber VARCHAR(10) DEFAULT NULL,
    postalcode VARCHAR(15) NOT NULL REFERENCES city(postalcode) ON DELETE RESTRICT,
    countycode VARCHAR(10) NOT NULL REFERENCES county(countycode) ON DELETE RESTRICT
);

CREATE TABLE listing (
    listinguuid UUID PRIMARY KEY,  
    selleruuid UUID NOT NULL REFERENCES client(clientuuid) ON DELETE CASCADE,
    title VARCHAR(150) NOT NULL,
    description TEXT DEFAULT NULL,
    postedDateTime TIMESTAMP NOT NULL DEFAULT NOW(),
    availabilityPeriodStart TIMESTAMP DEFAULT NULL,
    availabilityPeriodEnd TIMESTAMP DEFAULT NULL,
    minimumRentalDays INTEGER DEFAULT 1,
    pricePerMinimumPeriod NUMERIC(7,2) NOT NULL CHECK (pricePerMinimumPeriod >= 0),
    season VARCHAR(50) DEFAULT NULL,
    equipmenttype VARCHAR(50) NOT NULL,
    equipmentcondition VARCHAR(50) NOT NULL
);

CREATE INDEX idx_listing_seller ON listing(selleruuid);

CREATE TABLE rental (
    clientuuid UUID NOT NULL REFERENCES client(clientuuid) ON DELETE CASCADE,
    listinguuid UUID NOT NULL REFERENCES listing(listinguuid) ON DELETE CASCADE,
    selleruuid UUID NOT NULL REFERENCES client(clientuuid) ON DELETE CASCADE,
    rentingStartDateTime TIMESTAMP NOT NULL,
    rentingEndDateTime TIMESTAMP NOT NULL,
    rating SMALLINT CHECK (rating BETWEEN 1 AND 5) DEFAULT NULL,
    review TEXT DEFAULT NULL,
    PRIMARY KEY (clientuuid, listinguuid, selleruuid, rentingStartDateTime)
);

CREATE UNIQUE INDEX one_rating_per_client_per_listing
ON rental(clientuuid, listinguuid)
WHERE rating IS NOT NULL;

