import React, { useState, useEffect } from "react"

const FruitShow = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.sci_name}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default FruitShow
