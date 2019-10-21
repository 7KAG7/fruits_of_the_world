require 'rails_helper'

RSpec.describe Api::V1::FruitsController, type: :controller do
  describe "GET#index" do
    it "should render list of fruits" do
      fruit1 = Fruit.create(name: "asdjfh", description: "aosdhfglahsdflkjhasd", sci_name: "lqjhwas")
      fruit2 = Fruit.create(name: "a,msdnf", description: "amsdnbfglqnbdlfnb", sci_name: "okjpij")
      fruit3 = Fruit.create(name: "werqertwert", description: "mnxcv", sci_name: "kjbojhv")

      get :index

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 3
      expect(returned_json).to be_kind_of(Array)

      expect(returned_json[0]["name"]).to eq fruit1.name
      expect(returned_json[1]["description"]).to eq fruit2.description
      expect(returned_json[2]["sci_name"]).to eq fruit3.sci_name
      expect(returned_json[0]["id"]).to eq fruit1.id
    end
  end
end
