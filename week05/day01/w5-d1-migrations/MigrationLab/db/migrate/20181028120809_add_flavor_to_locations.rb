class AddFlavorToLocations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :flavor, :string
    remove_column :locations, :color
  end
end
