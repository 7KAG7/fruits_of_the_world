class CreateFruitsOfCountriesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :fruits_of_countries_tables do |t|
      t.belongs_to :fruits
      t.belongs_to :countries

      t.string :description
      t.timestamps
    end
  end
end
