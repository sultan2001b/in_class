class AddRemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :kittens, :fur_length
  end
end
