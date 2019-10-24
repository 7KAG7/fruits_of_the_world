import React, { useState, useEffect } from "react"
import FruitTile from "./FruitTile"

const FruitsIndexContainer = props => {
  const [fruits, setFruits] = useState([])
  const [quote, setQuote] = useState([])

  const quotes = [['"Knowledge is knowing that a tomato is a fruit. Wisdom is knowing not to put it in a fruit salad."', '- Brian O\'Driscoll'],
                  ['"The smallest seed of faith is better than the largest fruit of happiness."', '- Henry David Thoreau'],
                  ['"Life without love is like a tree without blossoms or fruit."', '- Khalil Gibran'],
                  ['"Taste every fruit of every tree in the garden at least once. It is an insult to creation not to experience it fully. Temperance is wickedness."', '- Stephen Fry'],
                  ['"Love is a fruit in season at all times, and within reach of every hand."', '- Mother Teresa'],
                  ['"A tree is known by its fruit; a man by his deeds. A good deed is never lost; he who sows courtesy reaps friendship, and he who plants kindness gathers love."', '- Saint Basil'],
                  ['"A man watches his pear tree day after day, impatient for the ripening of the fruit. Let him attempt to force the process, and he may spoil both fruit and tree. But let him patiently wait, and the ripe pear at length falls into his lap."', '- Abraham Lincoln']]
  const randomQuote = quotes[Math.floor(Math.random()*quotes.length)]

  useEffect(() => {
    fetch('/api/v1/fruits')
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
