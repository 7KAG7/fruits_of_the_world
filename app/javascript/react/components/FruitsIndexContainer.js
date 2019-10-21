import React, { useState, useEffect } from "react"
import FruitTile from "./FruitTile"

const FruitsIndexContainer = props => {
  const [fruits, setFruits] = useState([])

  useEffect(() => {
    fetch("/api/v1/fruits")
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then((parsedFruits) => {
      setFruits(parsedFruits)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

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
