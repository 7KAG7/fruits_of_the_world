class AddImagesToFruit < ActiveRecord::Migration[5.2]
  def change
    add_column :fruits, :fruit_image, :string
  end
end
