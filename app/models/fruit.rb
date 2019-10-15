class Fruit < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true

  has_many :reviews
  has_many :countries, through: :fruits_of_countries
end
