class Api::V1::FruitsController < ApplicationController
  def index
    render json: Fruit.all
  end

  def show
    fruit = Fruit.find(params[:id])
    render json: {fruit:fruit , reviews:fruit.reviews}
  end
end
