import React, { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import _ from "lodash"
import FruitShow from "./FruitShow"
import ReviewFormContainer from "./ReviewFormContainer"
import ReviewTile from "./ReviewTile"

const FruitShowContainer = (props) => {
  const [fruit, setFruit] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [errors, setErrors] = useState({})
  const [reviews, setReviews] = useState([])

  const fruitId = props.match.params.id
  const fetchFruit = `/api/v1/fruits/${fruitId}`

  useEffect(() => {
    fetch(fetchFruit)
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
        setFruit(fetchedFruit.fruit)
        setReviews(fetchedFruit.reviews)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    },[])

    const postNewReview = (postReview) => {
      event.preventDefault()
      postReview.fruitId = fruitId
        fetch(`/api/v1/fruits/${fruitId}/reviews`, {
          credentials: "same-origin",
          method: "POST",
          body: JSON.stringify(postReview),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          if (response.ok) {
            return response
          } else {
            const errorMessage = `${response.status} (${response.statusText})`
            const error = new Error(errorMessage)
            throw error
          }
        })
        .then(response => response.json())
        .then(body => {
          if (body.fruit.id) {
            setReviews(body.reviews)
          } else {
            setErrors(body.errors)
          }
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

  let reviewTiles = reviews.map(review => {
    return(
      <ReviewTile
        key={review.id}
        id={review.id}
        rating={review.rating}
        body={review.body}
      />
      )
    })

return (
  <div>
    <div>
    <FruitShow
      key={fruit.id}
      id={fruit.id}
      name={fruit.name}
      description={fruit.description}
      sci_name={fruit.sci_name}
      fruit_image={fruit.fruit_image}
    />
    </div>
    <div>
      <ReviewFormContainer
        fruitId={props.fruitId}
        postNewReview={postNewReview}
      />
    </div>
    <div>
      { reviewTiles }
    </div>
  </div>
)
}

export default FruitShowContainer
