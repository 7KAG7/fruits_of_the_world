class Review < ApplicationRecord
  belongs_to :user
  belongs_to :fruit

  validates :rating, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
  validates :body, presence: true, length: { maximum: 1000 }
end
