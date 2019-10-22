import React, { useState, useEffect } from "react"
import FruitTile from "./FruitTile"

const FruitsIndexContainer = props => {
  const [fruits, setFruits] = useState([])
  const [quote, setQuote] = useState("")

  const quotes = ["this is a quote", "this is NOT a quote", "QUOOOOOOOOOTE"]
  const randomQuote = quotes[Math.floor(Math.random()*quotes.length)]

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
      setQuote(randomQuote)
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
    <div>
      <h1 id="title">{quote}</h1>
      {fruitTiles}
    </div>
  )
}

export default FruitsIndexContainer
