<<<<<<< HEAD
# require 'rails_helper'
#
# feature "when visiting the fruits index" do
#   feature "visitor sees fruits" do
#     scenario "fruits are on the page" do
#
#       visit fruits_path
#
#       expect(page).to have_content("Fruits")
#     end
#   end
# end
=======
require 'rails_helper'

feature "when visiting the fruits index" do
  feature "visitor sees fruits" do
    scenario "fruits are on the page" do

      visit fruits_path

      expect(page).to have_content("Fruits")
    end
  end

  scenario "fruits are on the page" do

    banana = Fruit.create!(name: "banana", description: "yellow", sci_name: "plantae")
    pineapple = Fruit.create!(name: "pineapple", description: "satan apple but delicious", sci_name: "ananas comosus")

    visit fruits_path

    expect(page).to have_content banana.name
    expect(page).to have_content banana.sci_name
    expect(page).to have_content pineapple.sci_name
  end
end
>>>>>>> master
