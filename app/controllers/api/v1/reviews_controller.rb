class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery except: :json

  def index
    render json: Review.where(fruit_id: params["fruit_id"])
  end

  def create
    new_review = Review.new(review_params)
    fruit = Fruit.find(params[:fruit_id])
    new_review.fruit = fruit
    new_review.user = User.first
    if new_review.save
      render json: {fruit:fruit, reviews:fruit.reviews}
    else
      render json: new_review.errors
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body)
  end
end
