CREATE TABLE people(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    dob DATE
);

-- sqlite3 database.db < creat_people.sql

.schema