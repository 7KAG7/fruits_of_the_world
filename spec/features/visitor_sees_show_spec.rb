require 'rails_helper'

feature "visitor sees show" do
  scenario "details are on the page" do

    oranges = Fruit.create(name: "oranges", description: "the color orange", sci_name: "Citrus × sinensis")

    visit fruit_path(oranges.id)

    expect(page).to have_content oranges.name
    expect(page).to have_content oranges.sci_name
  end
end
