class FruitsController < ApplicationController
  def index
    @fruits = Fruit.all
  end

  def show
    @fruit = Fruit.find(params[:id])
  end
end
