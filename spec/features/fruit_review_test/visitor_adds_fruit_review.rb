require 'rails_helper'

feature "visitors can add reviews for fruit" do
  scenario "visitor adds new review successfully" do

  apple = Fruit.create(name: "Apple", sci_name: "Malus Domestica", description: "An apple is a sweet, edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.")

  visit new_fruit_review_path
  expect(page).to have_content "apple"

  fill_in "Rating", with: 5
  fill_in "Body", with: "The apple was fresh and delicious."
  click_button "Submit Review"

  expect(page).to have_content "Review submitted successfully"
  expect(page).to have_content "Review: The apple was fresh and delicious."
  expect(page).to have_content "Rating: 5"
  expect(page).to have_content "Reviewed On: October 17 2019"
end

  scenario "visitor adds new review unsuccessfully" do
    apple = Fruit.create(name: "Apple", sci_name: "Malus Domestica", description: "An apple is a sweet, edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.")

    visit new_fruit_review_path
    expect(page).to have_content "Submit Your Own Review"

    click_button "Submit Review"

    expect(page).to have_content "Rating can't be blank and Rating is not a number"
    expect(page).to have_content "Body can't be blank"
  end
end
