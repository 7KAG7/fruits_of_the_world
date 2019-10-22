import React, { useState, useEffect } from "react"

const FruitShow = (props) => {
  return (
    <center>
      <h1>{props.name}</h1>
      <h3>{props.sci_name}</h3>
      <p>{props.description}</p>
    </center>
  )
}

export default FruitShow
