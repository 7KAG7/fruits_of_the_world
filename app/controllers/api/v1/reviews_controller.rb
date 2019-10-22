class Api::V1::ReviewsController < ApplicationController
  def index
    render json: Review.where(fruit_id: params["fruit_id"])
  end
end
