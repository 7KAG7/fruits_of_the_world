class Review < ApplicationRecord
  belongs_to :user
  belongs_to :fruit
  validates :rating, presence: true
end
