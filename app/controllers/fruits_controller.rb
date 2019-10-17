class FruitsController < ApplicationController
  def index
    @fruits = Fruit.all
  end

  def show
    @fruit = Fruit.find(params[:id])
<<<<<<< HEAD
    @review = Review.new
    @reviews = @fruit.reviews
=======
>>>>>>> 1b08bdae90a07595cace82381c555062ff1df098
  end
end
