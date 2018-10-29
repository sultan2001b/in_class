class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.decimal :lat
      t.decimal :lond
      t.string :name

      t.timestamps
    end
  end
end
