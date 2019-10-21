class Api::V1::FruitsController < ApplicationController
  def index
    render json: Fruit.all 
  end
end
