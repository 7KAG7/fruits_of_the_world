class AddUsersColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string, null: false
    add_column :users, :location, :string
    add_column :users, :favorite_fruit, :string
  end
end
