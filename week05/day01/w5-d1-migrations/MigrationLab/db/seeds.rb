require "pry"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Location.create({name: "resturant", created_at: Time.now, lat: 1, lond: 2, updated_at: Time.now, city: "ccity", state: "sstate", flavor: "fflavor"})
binding.pry