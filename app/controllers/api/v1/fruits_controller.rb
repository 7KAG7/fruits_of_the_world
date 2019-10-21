class Api::V1::FruitsController < ApplicationController
  def index
    render json: Fruit.all
  end

  def show
    render json: Fruit.find(params[:id])
  end
end
