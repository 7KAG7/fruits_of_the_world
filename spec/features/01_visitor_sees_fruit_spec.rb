require 'rails_helper'

feature "visitor sees fruits" do
  scenario "fruits are on the page" do

    visit fruits_path

    expect(page).to have_content("Fruits")
    expect(page).to have_content banana.name
    expect(page).to have_content banana.sci_name
  end
end
