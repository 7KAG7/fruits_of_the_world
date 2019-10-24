import React, { useState, useEffect } from "react"

const ReviewFormContainer = props => {

  return(
    <form onSubmit={props.postNewReview} className="new-review-form">
      <ul>
        <label htmlFor="rating">
          Fruit Rating
          <select
            name="rating"
            id="rating"
            type="select"
            value={props.newReview.rating}
            onChange={props.addNewReview}
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
            value={props.newReview.body}
            onChange={props.addNewReview}
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
