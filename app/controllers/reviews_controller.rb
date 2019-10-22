class ReviewsController < ApplicationController
  def new
    @review = Review.new
    @fruit = Fruit.find(params[:fruit_id])
  end

  def create
    @fruit = Fruit.find(params[:fruit_id])
    @review = Review.new(review_params)
    @review.fruit = @fruit
<<<<<<< HEAD
    @review.user_id = current_user.id
=======
>>>>>>> master

    if @review.save
      flash[:notice] = "Review submitted successfully"
      redirect_to @fruit
    else
<<<<<<< HEAD
      flash[:errors] = @review.errors.full_messages.to_sentence
=======
      flash.now[:errors] = @review.errors.full_messages.to_sentence
>>>>>>> master
      redirect_to @fruit
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body)
  end
end
