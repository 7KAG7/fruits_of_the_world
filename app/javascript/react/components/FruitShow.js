import React, { useState, useEffect } from "react"

const FruitShow = (props) => {
  return (
    <div>
      <center>
        <img className="fruit-image" src={props.fruit_image}/>
        <h1>{props.name}</h1>
        <h3>{props.sci_name}</h3>
        <p class="fruit-description">{props.description}</p>
      </center>
    </div>
  )
}

export default FruitShow
