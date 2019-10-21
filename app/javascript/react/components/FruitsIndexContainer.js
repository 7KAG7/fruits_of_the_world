import React, { useState, useEffect } from "react"
<<<<<<< HEAD
import './FruitsIndexContainer.css'
=======
>>>>>>> 7a27f9d5f2436b37e5069f6fc00777a1f81c7b56
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
