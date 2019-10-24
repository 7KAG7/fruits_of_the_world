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

  return(
    <center>
      <form onSubmit={props.handleFruitForm} className="new-fruit-form callout">
        <label htmlFor="rating">
          Fruit Rating
          <select name="rating" value={newReview.rating} onChange={props.handleFruitFieldChange}>
              <option name=""></option>
              <option name="1">1</option>
              <option name="2">2</option>
              <option name="3">3</option>
              <option name="4">4</option>
              <option name="5">5</option>
          </select>
        </label>
        <p> </p>
        <label htmlFor="body">Comment
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
    </center>
  )
}

export default ReviewFormContainer
