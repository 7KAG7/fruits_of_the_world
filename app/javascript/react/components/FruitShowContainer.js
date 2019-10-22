import React, { useState, useEffect } from "react"
import FruitShow from "./FruitShow"
import ReviewForm from "./ReviewForm"

const FruitShowContainer = (props) => {
  const [fruit, setFruit] = useState({})

  useEffect(() => {
    const fruitId = props.match.params.id

    fetch(`/api/v1/fruits/${fruitId}`)
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw(error)
        }
      })
      .then(response => response.json())
      .then(fetchedFruit => {
        setFruit(fetchedFruit)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    },[])

  return (
    <div>
    <div>
    <FruitShow
      id={fruit.id}
      name={fruit.name}
      description={fruit.description}
      sci_name={fruit.sci_name}
    />
    </div>
    <div>
    <ReviewForm
      
    />
    </div>
    </div>
  )
}

export default FruitShowContainer
