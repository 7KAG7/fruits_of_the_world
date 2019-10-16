create_table :fruits do |t|
  t.string :name, null: false
  t.text :description, null: false
  t.string :sci_name

  t.timestamps
