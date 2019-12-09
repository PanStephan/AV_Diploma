import * as React from 'react'
import './app.sass'
import MainPage from '../MainPage'
import {Route, Switch} from 'react-router-dom'
import AboutPage from '../AboutPage'
import ForYourPleasurePage from '../ForYourPleasurePage'

const App = (): JSX.Element => {
  return (
    <Switch>
      <Route path='/' exact component={MainPage}/>
      <Route path='/about' component={AboutPage}/>
      <Route parh='/for_pleasure' component={ForYourPleasurePage} />
    </Switch>
  )
}

export default App
