import React from "react"
import { Link } from "react-router-dom"

const FruitTile = props => {
  return (
    <div className="grid-x">
      <div class="image-container">
        <div className="grid small-6 medium-6">
          <Link to={`/fruits/${props.id}`} className="fruit-tile-text">
            <img className="fruit-tile-image" src={props.fruit_image}/>
          </Link>
        </div>
    <div class="text">{props.name}</div>
      </div>
    </div>
  )
}

export default FruitTile

// <div class="middle">
//   <div class="fruit-text">What</div>
// </div>
