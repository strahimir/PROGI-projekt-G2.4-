CREATE EXTENSION IF NOT EXISTS postgis;

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
    dateJoined DATE NOT NULL DEFAULT CURRENT_DATE,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30),
    phonenumber VARCHAR(20) DEFAULT NULL,
    provider VARCHAR(50),
    providerId VARCHAR(255),
    reportcount SMALLINT DEFAULT 0,
    role VARCHAR DEFAULT 'user'
);

CREATE TABLE seller (
    selleruuid UUID NOT NULL REFERENCES client(clientuuid),
    subscriptionstartdatetime TIMESTAMP NOT NULL DEFAULT NOW(),
    subscriptionenddatetime TIMESTAMP NOT NULL DEFAULT (NOW() + '1 YEAR'::INTERVAL),
    autorenewal BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (selleruuid, subscriptionstartdatetime)
);

CREATE TABLE report (
    selleruuid UUID NOT NULL REFERENCES client(clientuuid), -- reporter
    clientuuid UUID NOT NULL REFERENCES client(clientuuid), -- reportee
    reportdatetime TIMESTAMP NOT NULL DEFAULT NOW(),
    reason TEXT NOT NULL,
    adminuuid UUID NOT NULL REFERENCES client(clientuuid), -- reviewer
    reviewdatetime TIMESTAMP DEFAULT NULL,
    outcome BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (clientuuid, selleruuid, reportdatetime)
);

CREATE TABLE suspension (
    clientuuid UUID NOT NULL REFERENCES client(clientuuid), -- suspendee
    suspensionstartdatetime TIMESTAMP UNIQUE NOT NULL,
    suspensionlength SMALLINT NOT NULL, -- -1 = permaban
    PRIMARY KEY (clientuuid, suspensionstartdatetime, suspensionlength)
);

CREATE TABLE listing (
    listinguuid UUID PRIMARY KEY,  
    selleruuid UUID NOT NULL REFERENCES client(clientuuid) ON DELETE CASCADE,
    title VARCHAR(150) NOT NULL,
    description TEXT DEFAULT NULL,
    posteddatetime TIMESTAMP NOT NULL DEFAULT NOW(),
    availabilityperiodstart TIMESTAMP DEFAULT NULL,
    availabilityperiodend TIMESTAMP DEFAULT NULL,
    minimumrentaldays INT DEFAULT 1,
    priceperminimumperiod NUMERIC(7,2) NOT NULL CHECK (pricePerMinimumPeriod >= 0),
    season VARCHAR(50) DEFAULT NULL,
    equipmenttype VARCHAR(50) NOT NULL,
    equipmentcondition VARCHAR(50) NOT NULL
);

CREATE TABLE listing_address (
    listinguuid UUID NOT NULL REFERENCES listing(listinguuid) ON DELETE CASCADE,
    coordinates GEOMETRY(POINT) NOT NULL,
    streetname VARCHAR(255) NOT NULL,
    streetnumber VARCHAR(10) NOT NULL CHECK (streetnumber ~ '^[0-9]+[A-Za-z]?$'),
    aptnumber VARCHAR(10) DEFAULT NULL,
    postalcode VARCHAR(15) NOT NULL REFERENCES city(postalcode) ON DELETE RESTRICT,
    countycode VARCHAR(10) NOT NULL REFERENCES county(countycode) ON DELETE RESTRICT,
    PRIMARY KEY (listinguuid, coordinates)
);

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



