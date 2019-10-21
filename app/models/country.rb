class Country < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true

  has_many :fruits, through: :fruits_of_countries
end
