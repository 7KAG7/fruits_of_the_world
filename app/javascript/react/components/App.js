import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"

import FruitsIndexContainer from './FruitsIndexContainer'
import FruitShowContainer from './FruitShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FruitsIndexContainer}/>
        <Route exact path="/fruits/:id" component={FruitShowContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
