class Fruit < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
<<<<<<< HEAD

  has_many :reviews
  has_many :users, through: :reviews
  has_many :countries, through: :fruits_of_countries
=======
>>>>>>> 1b08bdae90a07595cace82381c555062ff1df098
end
