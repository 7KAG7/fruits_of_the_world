import React, { useState, useEffect } from "react"

const ReviewFormContainer = props => {
  const [newReview, setNewReview] = useState({
    rating: "",
    body: "",
    fruitId: props.fruitId
  })

  const postNewReview = (name) => {
    event.preventDefault()
    if (validForSubmission()) {
      fetch("api/v1/reviews", {
        credentials: "same-origin",
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
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        if (body.id) {
          setShouldRedirect(true)
        } else {
          setErrors(body)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  }

  const addNewReview = (event) => {
    setNewReview({
      ...newReview, [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const clearForm = () => {
    event.preventDefault()
    setNewReview(formDetails)
  }



  return (
    <form className="new-review-form" onSubmit={postNewReview}>
      <label>
        Fruit Review
        <select
          name="rating"
          type="select"
          id="rating"
          onChange={addNewReview}
          value={newReview.rating}>
          <option name=""></option>
          <option name="1">1</option>
          <option name="2">2</option>
          <option name="3">3</option>
          <option name="4">4</option>
          <option name="5">5</option>
        </select>
      </label>
      <label>
        Article Body
        <textarea
          name="review"
          type="text"
          id="body"
          onChange={addNewReview}
          value={newReview.body}
        />
      </label>
      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default ReviewFormContainer
