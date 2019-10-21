import React, { useState, useEffect } from "react"

import FruitTile from "./FruitTile"

const FruitsIndexContainer = props => {
  const [fruits, setFruits] = useState([])

  const fruitTiles = fruits.map(fruit => {
    return (
      <FruitTile
        key={fruit.id}
        id={fruit.id}
        name={fruit.name}
        description={fruit.description}
        sci_name={fruit.sci_name}
        // image={fruit.image}
      />
    )
  })

  return (
    <div className="row">
      <div className="small-8 small-centered columns">
        <h1> Fruits Index </h1>
        {fruitTiles}
      </div>
    </div>
  )
}

export default FruitsIndexContainer
