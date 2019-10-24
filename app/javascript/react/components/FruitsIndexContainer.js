import React, { useState, useEffect } from "react"
import FruitTile from "./FruitTile"
import quotes from "../../packs/quotes.js"

const FruitsIndexContainer = props => {
  const [fruits, setFruits] = useState([])
  const [quote, setQuote] = useState([])

  const randomQuote = quotes[Math.floor(Math.random()*quotes.length)]

  useEffect(() => {
    fetch(`/api/v1/fruits`)
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
        fruit_image={fruit.fruit_image}
      />
    )
  })

  return (
    <div>
      <center>
        <h1 id="title">{quote[0]}</h1>
        <h3>{quote[1]}</h3>
        {fruitTiles}
        <br></br><br></br>
        <a href="/sources" class="signup-link">Sources</a> | <a href="/credits" class="signup-link">Credits</a>
        <br></br><br></br>
      </center>
    </div>
  )
}

export default FruitsIndexContainer
