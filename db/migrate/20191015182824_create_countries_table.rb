class CreateCountriesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :countries_tables do |t|
      t.string :name, null: false
      t.text :description, null: false

      t.timestamps
    end
  end
end
