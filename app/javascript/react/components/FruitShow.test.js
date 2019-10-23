import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

import FruitShow from "./FruitShow"

describe('<FruitShow />', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = mount(
      <FruitShow
        name="orange"
        description="the color is orange"
        sci_name="Citrus × ​sinensis"
      />
    )
  })

 it("should render an h1 element containing the name of the fruit", () => {
   expect(wrapper.find('h1').text()).toBe("orange")
 });

 it("should render an the sci_name name", () => {
   expect(wrapper.find('h3').text()).toBe("Citrus × ​sinensis")
 });
})
