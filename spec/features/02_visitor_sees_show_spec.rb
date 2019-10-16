require 'rails_helper'

feature "visitor sees show" do
  scenario "details are on the page" do

    oranges = Fruit.create(name: "oranges", description: "the color orange", sci_name: "Citrus × sinensis")

    visit fruits_path

    expect(page).to have_content("oranges")
    expect(page).to have_content oranges.name
    expect(page).to have_content oranges.description
    expect(page).to have_content oranges.sci_name
  end
end
