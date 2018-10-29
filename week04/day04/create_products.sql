CREATE TABLE products(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price FLOAT,
    shop_id INTEGER REFERENCES shops
);