class CreateReviewsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews_tables do |t|
      t.belongs_to :fruit
      t.belongs_to :user
      t.text :review, null: false 

      t.timestamps
    end
  end
end
