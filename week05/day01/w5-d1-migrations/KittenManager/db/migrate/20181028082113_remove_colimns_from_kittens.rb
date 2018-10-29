class RemoveColimnsFromKittens < ActiveRecord::Migration[5.2]
  def change
    remove_column :kittens, :owner, :bollean
    add_column :kittens, :fur_length, :string
  end
end
