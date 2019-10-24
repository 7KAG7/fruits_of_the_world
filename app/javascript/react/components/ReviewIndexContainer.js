import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import ReviewTile from "./ReviewTile"

const ReviewIndexContainer = props => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(`/api/v1/fruits/${props.fruitId/reviews}`)
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
    .then(body => {
      setReviews(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])
  return (
    <div>
      <h1> This is from the ReviewIndexContainer </h1>
    </div>
  )
}

export default ReviewIndexContainer
