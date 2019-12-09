import * as React from 'react'
import Main from './Main/Main'
import Header from './Header/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SeparateItem from '../../SeparateItem/SeparateItem'
import RegularFooter from '../../RegularFooter/RegularFooter'

const ForYourPleasurePage = () => (
  <>
    <Header/>
    <Router>
        <Switch>
          <Route path='/pleasure/:id' exact render = {
            () => { 
              return <SeparateItem type={'/pleasure/'}/>
            }
          }/>
          <Route path ='/pleasure/' exact component={Main}/>
        </Switch>
      </Router>
    <RegularFooter/>
  </>  
)

export default ForYourPleasurePage
