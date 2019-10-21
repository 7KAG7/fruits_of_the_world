import React, { useState, useEffect } from "react"
import FruitShow from "./FruitShow"

const FruitShowContainer = (props) => {
  const [fruit, setFruit] = useState({})

  useEffect(() => {
    const fruitId = props.match.params.id

    fetch(`/api/v1/fruits/${fruitId}`)
    .then(response => response.json())
    .then(fetchedFruit => {
      setFruit(fetchedFruit)
    })
  }, [])

  return (
    <FruitShow
      id={fruit.id}
      name={fruit.name}
      description={fruit.description}
      sci_name={fruit.sci_name}
    />
  )
}

export default FruitShowContainer
