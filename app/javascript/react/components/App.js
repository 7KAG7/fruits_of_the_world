import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"

import FruitsIndexContainer from './FruitsIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FruitsIndexContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
