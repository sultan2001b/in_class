require "sqlite3"
require "active_record"

ActiveRecord::Base.establish_connection(
  adapter: "sqlite3",
  database: "./db/pets.db",
)

# ActiveRecord::schema.define do
#     create_table :
