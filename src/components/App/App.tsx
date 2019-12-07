import * as React from 'react'
import './app.sass'
import MainPage from '../Pages/MainPage'
import {Route, Switch} from 'react-router-dom'
import AboutPage from '../Pages/AboutPage'
import ForYourPleasurePage from '../Pages/ForYourPleasurePage'
import ContactPage from '../Pages/ContactPage'


const App = (): JSX.Element => {
  return (
    <Switch>
      <Route path='/' exact component={MainPage}/>
      <Route path='/about' component={AboutPage}/>
      <Route path='/pleasure' component={ForYourPleasurePage}/>
      <Route path='/contact' component={ContactPage}/>
    </Switch>
  )
}

export default App
