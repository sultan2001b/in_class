-- sqlite3 database.db < select_shops.sql --echo
SELECT *
FROM shops;

SELECT *
FROM shops
WHERE name = "jarir" and location = "Olaya St." ;