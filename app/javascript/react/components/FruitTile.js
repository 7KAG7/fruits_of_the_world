import React from "react"
import { Link } from "react-router-dom"

const FruitTile = props => {
  return (
    <div className="grid-x">
      <div className="image-container">
      <Link to={`/fruits/${props.id}`} className="fruit-tile-text">
        <div className="grid small-6 medium-6">
          <img className="fruit-tile-image" src={props.fruit_image}/>
        </div>
      </Link>
      </div>
    </div>
  )
}

export default FruitTile
