import * as React from 'react'
import './app.sass'
import MainPage from '../Pages/MainPage'
import {Route, Switch, Redirect} from 'react-router-dom'
import AboutPage from '../Pages/AboutPage'
import ForYourPleasurePage from '../Pages/ForYourPleasurePage'
import ContactPage from '../Pages/ContactPage'
import NotFound from '../NotFound/NotFound'


const App = (): JSX.Element => {
  return (
    <Switch>
      <Route path='/' exact component={MainPage}/>
      <Route path='/about/' component={AboutPage}/>
      <Route path='/pleasure/' component={ForYourPleasurePage}/>
      <Route path='/contact/' component={ContactPage}/>
      <Route path='/404' component={() => <NotFound></NotFound>} />
			<Redirect from='*' to='/404' />
    </Switch>
  )
}

export default App
