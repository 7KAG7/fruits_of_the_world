require 'rails_helper'

feature "user visits index page" do
  scenario "user sees search bar on index page" do

    visit '/'
    expect(page).to have_content "Fruits index"
    expect(page).to have_selector("input[type=submit][value='Search']")
  end

  scenario "user submits fruit name in search bar" do
    orange = Fruit.create(name: "orange", description: "tastes yummy", sci_name: "Orangey Orange")

    visit '/'
    fill_in('Enter search term...', with: 'orange')
    click_button("Search")

    expect(page).to have_content "Search Results"
    expect(page).to have_content orange.name
    expect(page).to have_content orange.sci_name
  end

  scenario "user submits no information in search bar" do

    visit '/'
    click_button("Search")

    expect(page).to have_content "Search Results"
    expect(page).to have_content "No results found."
  end

end
