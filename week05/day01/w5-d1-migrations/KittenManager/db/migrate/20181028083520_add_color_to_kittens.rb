class AddColorToKittens < ActiveRecord::Migration[5.2]
  def change
    add_column :kittens, :color, :string
  end
end
