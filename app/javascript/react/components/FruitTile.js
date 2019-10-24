import React from "react"
import { Link } from "react-router-dom"

const FruitTile = props => {
  return (
    <div className="grid-x">
      <div class="image-container">
        <div className="grid small-6 medium-6">
          <Link to={`/fruits/${props.id}`} className="fruit-tile-text">
            <img className="fruit-tile-image"  src={props.fruit_image}/>
            <div class="middle">
              <a class="text">{props.name}</a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FruitTile
