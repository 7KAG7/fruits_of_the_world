class Review < ApplicationRecord
  validates :rating, presence: true, numericality: {greater_than_or_equal_to: 0, less_than_or_equal_to: 5}
  validates :body, presence: true

  belongs_to :fruit
  belongs_to :user
end
