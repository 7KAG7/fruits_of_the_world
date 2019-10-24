import React, { useState, useEffect } from "react"
import FruitTile from "./FruitTile"

const FruitsIndexContainer = props => {
  const [fruits, setFruits] = useState([])
  const [quote, setQuote] = useState("")

  const quotes = ['"Knowledge is knowing that a tomato is a fruit. Wisdom is knowing not to put it in a fruit salad."',
                  '"The smallest seed of faith is better than the largest fruit of happiness."',
                  '"Life without love is like a tree without blossoms or fruit."',
                  '"No one can reap the fruit before planting the trees."',
                  '"Love is a fruit in season at all times, and within reach of every hand."',
                  '"A tree is known by its fruit; a man by his deeds. A good deed is never lost; he who sows courtesy reaps friendship, and he who plants kindness gathers love."',
                  '"A man watches his pear tree day after day, impatient for the ripening of the fruit. Let him attempt to force the process, and he may spoil both fruit and tree. But let him patiently wait, and the ripe pear at length falls into his lap."']
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
      <h1 id="title">{quote}</h1>
      {fruitTiles}
    </div>
  )
}

export default FruitsIndexContainer
