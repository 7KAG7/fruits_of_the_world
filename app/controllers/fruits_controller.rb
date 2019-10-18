class FruitsController < ApplicationController
  def index
    @fruits = Fruit.all
  end

  def show
    @fruit = Fruit.find(params[:id])
    @review = Review.new
    @reviews = @fruit.reviews
  end

  def search
    if !params[:query].empty?
      query = "%#{params[:query]}%"
      @fruits = Fruit.where('name ilike ? or sci_name ilike ?', query, query)
    end
  end

end
