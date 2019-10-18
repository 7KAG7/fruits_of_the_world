class AddUsersColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :location, :string
    add_column :users, :favorite_fruit, :string
    add_column :users, :avatar, :string
  end
end
