import React from "react"

const ReviewTile = props => {
  return(
    <center>
    <div className="review-box">
      <div className="review-rating">
        Rating: {props.rating}
      </div>
      <div className="review-comment">
        Comment: {props.body}
      </div>
    </div>
    </center>
  )
}

export default ReviewTile
