import React, { useState, useEffect } from "react"

const ReviewFormContainer = props => {

  const [newReview, setNewReview] = useState({
    rating: "",
    body: "",
    fruitId: props.fruitId
  })

  const addNewReview = (event) => {
    event.preventDefault()
    setNewReview({
      ...newReview, [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const formSubmit = (event) =>{
    event.preventDefault
    let formPayLoad = newReview
    props.postNewReview(formPayLoad)
  }


  return(
    <form onSubmit={formSubmit} className="new-review-form">
      <ul>
        <label htmlFor="rating">
          Fruit Rating
          <select
            name="rating"
            id="rating"
            type="select"
            value={newReview.rating}
            onChange={addNewReview}
          >
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
            type="text"
            value={newReview.body}
            onChange={addNewReview}
          />
        </label>
      </ul>
      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default ReviewFormContainer
