import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import { Link } from "react-router-dom"

import FruitTile from "./FruitTile"

Enzyme.configure({ adapter: new Adapter() })

describe("FruitTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <FruitTile
        key="1"
        id="1"
        name="apple"
        sci_name="Malus Domestica"
        description="An apple is a sweet, edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus."
      />
    )
  })

 it("should render an p element with the fruit name and sci name", () => {
   expect(wrapper.find("p").text()).toBe("apple - Malus Domestica")
 });

})
