import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from "react-router-dom"
import FruitTile from "./FruitTile"

Enzyme.configure({ adapter: new Adapter() })

describe("FruitTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <FruitTile
          key="1"
          id="1"
          name="apple"
          sci_name="Malus Domestica"
          description="An apple is a sweet, edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus."
        />
      </BrowserRouter>
    )
  })

 it("should render a link element with the fruit name", () => {
   expect(wrapper.find("Link").props()["to"]).toBe("/fruits/1")
 });
})
