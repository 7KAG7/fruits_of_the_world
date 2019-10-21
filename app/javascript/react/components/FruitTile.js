import React from "react"
import { BrowserRouter, Link } from "react-router-dom"

const FruitTile = props => {
  return (
    <div className="fruit-tile">
      <BrowserRouter>
        <Link to={`/fruits/${props.id}`}>
          <p>{props.name} - {props.sci_name}</p>
        </Link>
      </BrowserRouter>
    </div>
  )
}

export default FruitTile
