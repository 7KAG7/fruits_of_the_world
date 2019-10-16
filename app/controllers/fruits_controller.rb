class FruitsController < ApplicationController
  def index
    @fruits = Fruit.all
  end
end
