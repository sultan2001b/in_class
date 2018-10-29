class AddRemoveColorColumn < ActiveRecord::Migration[5.2]
  def change
        remove_column :kittens, :color

  end
end
