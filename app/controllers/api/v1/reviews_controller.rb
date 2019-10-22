class Api::V1::ReviewsController < ApplicationController
  def index
    render json: Review.where(fruit_id: params["fruit_id"])
  end

  def create
    new_review = Review.new(review_params)
    fruit = Fruit.find(params[:fruitId])
    new_review.fruit = fruit

    if new_review.save
      render json: new_review
    else
      render json: new_review.errors
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body)
  end
end
