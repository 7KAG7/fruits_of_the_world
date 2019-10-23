import React, { useState, useEffect } from "react"
import FruitShow from "./FruitShow"
import ReviewFormContainer from "./ReviewFormContainer"

const FruitShowContainer = (props) => {
  const [fruit, setFruit] = useState({})
  const [newReviews, setNewReviews] = useState([])

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

    const handleFruitForm = formPayload => {
      fetch("/api/v1/reviews", {
        method: "POST",
        body: JSON.stringify(newReview),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw(error)
        }
      })
      .then(response => response.json())
      .then((addedNewReview) => {
        setNewReviews([...newReviews, addedNewReview])
      })
    }

  return (
    <div>
      <div>
      <FruitShow
        id={fruit.id}
        name={fruit.name}
        description={fruit.description}
        sci_name={fruit.sci_name}
        fruit_image={fruit.fruit_image}
      />

      <ReviewFormContainer
        handleFruitForm={handleFruitForm}
      />
      </div>
    </div>
  )
}

export default FruitShowContainer
