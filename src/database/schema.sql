CREATE TABLE users (
    id UUID PRIMARY KEY,
    provider VARCHAR(50) NOT NULL,
    provider_id VARCHAR(255) NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    isBlocked BOOLEAN DEFAULT FALSE, 
    UNIQUE (provider, provider_id)
);

CREATE TABLE merchants (
    id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    subscriptionStart DATE DEFAULT NULL,
    subscriptionEnd DATE DEFAULT NULL,
    store_name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(50),
    contact_email VARCHAR(255),
    average_rating NUMERIC(3,2) DEFAULT 0
);

CREATE TABLE administrators (
    id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    can_manage_users BOOLEAN DEFAULT TRUE,
    can_manage_payments BOOLEAN DEFAULT TRUE
);

CREATE TABLE equipment (
    id SERIAL PRIMARY KEY,
    merchant_id UUID REFERENCES merchants(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    available_from DATE,
    available_until DATE,
    price_per_day NUMERIC(10,2) NOT NULL,
    deposit NUMERIC(10,2),
    image_url TEXT,
    location VARCHAR(150) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    client_id INT REFERENCES clients(id) ON DELETE CASCADE,
    equipment_id INT REFERENCES equipment(id) ON DELETE CASCADE,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    total_price NUMERIC(10,2) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED')) DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reservation_id INT REFERENCES reservations(id) ON DELETE CASCADE,
    client_id INT REFERENCES clients(id) ON DELETE CASCADE,
    merchant_id INT REFERENCES merchants(id) ON DELETE CASCADE,
    equipment_id INT REFERENCES equipment(id) ON DELETE CASCADE,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reports (
    id SERIAL PRIMARY KEY,
    reported_client_id INT REFERENCES clients(id) ON DELETE CASCADE,
    merchant_id INT REFERENCES merchants(id) ON DELETE CASCADE,
    description TEXT NOT NULL,
    status VARCHAR(20) CHECK (status IN ('OPEN', 'REVIEWED', 'RESOLVED')) DEFAULT 'OPEN',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reviewed_by INT REFERENCES administrators(id)
);

CREATE TABLE membership_settings (
    id SERIAL PRIMARY KEY,
    annual_fee NUMERIC(10,2) NOT NULL,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by INT REFERENCES administrators(id)
);
