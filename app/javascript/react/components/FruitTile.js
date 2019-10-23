import React from "react"
import { Link } from "react-router-dom"

const FruitTile = props => {
  return (
    <div className="fruit-tile">
      <Link to={`/fruits/${props.id}`} class="fruit-tile-text">
        {props.name} - {props.sci_name}
      </Link>
    </div>
  )
}

export default FruitTile
