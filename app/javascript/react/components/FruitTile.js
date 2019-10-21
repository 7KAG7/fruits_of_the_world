import React from "react"
import { Link } from "react-router-dom"

const FruitTile = props => {
  return (
    <div className="fruit-tile">
      <p> {props.name}</p>
    </div>
  )
}

export default FruitTile
