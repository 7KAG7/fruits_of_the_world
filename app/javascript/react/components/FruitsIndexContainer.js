import React, { useState, useEffect } from "react"
import './FruitsIndexContainer.css'
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
    <div className=".color-change-5x">
      <div className="row">
        <div className="small-8 small-centered columns">
          <h1 id="title"> Replace this text with something smarter </h1>
          {fruitTiles}
        </div>
      </div>
    </div>
  )
}

export default FruitsIndexContainer
