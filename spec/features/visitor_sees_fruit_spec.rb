require 'rails_helper'

feature "when visiting the fruits index" do
  scenario "fruits are on the page" do

    banana = Fruit.create!(name: "banana", description: "yellow", sci_name: "plantae")
    visit fruits_path

    expect(page).to have_content("Fruits")
    expect(page).to have_content banana.name
    expect(page).to have_content banana.sci_name
  end
end
