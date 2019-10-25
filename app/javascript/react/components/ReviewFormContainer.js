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
    event.preventDefault()
    let formPayLoad = newReview
    props.postNewReview(formPayLoad)
    setNewReview({
      rating: "",
      body: ""
    })
  }

  return(
    <center>
      <form onSubmit={formSubmit} className="new-review-form">
          <label htmlFor="rating">
            <h2 className="rating-title">Fruit Rating</h2>
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
            <h2 className="body-box">Fruit Comment</h2>
            <textarea
              name="body"
              id="body"
              type="text"
              value={newReview.body}
              onChange={addNewReview}
            />
          </label>
        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </center>
  )
}

export default ReviewFormContainer
