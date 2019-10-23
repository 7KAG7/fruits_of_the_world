import React, { useState, useEffect } from "react"

const ReviewFormContainer = props => {
  const [newReview, setNewReview] = useState({
    rating: "",
    body: "",
    fruitId: props.fruitId
  })
  const [newReviews, setNewReviews] = useState([])

  const handleFruitFieldChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

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

  return(
    <form onSubmit={handleFruitForm} className="new-fruit-form callout">
      <label htmlFor="rating">
        Fruit Rating
        <select name="rating" value={newReview.rating} onChange={handleFruitFieldChange}>
            <option name=""></option>
            <option name="1">1</option>
            <option name="2">2</option>
            <option name="3">3</option>
            <option name="4">4</option>
            <option name="5">5</option>
        </select>
      </label>
      <label htmlFor="body">
        Fruit Body
        <textarea
          name="body"
          id="body"
          value={newReview.body}
          onChange={handleFruitFieldChange}
        />
      </label>
      <div className="button-group">
        <input onChange={handleFruitFieldChange} className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default ReviewFormContainer
