class Fruit < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true

  has_many :reviews
  has_many :users, through: :reviews
end
