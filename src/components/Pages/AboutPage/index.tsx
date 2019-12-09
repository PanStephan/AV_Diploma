import * as React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SeparateItem from '../../SeparateItem/SeparateItem'
import RegularFooter from '../../RegularFooter/RegularFooter'

const AboutPage = (): JSX.Element => (
  <>
    <Header/>
    <Router>
        <Switch>
          <Route path='/about/:id' exact render = {
            () => { 
              return <SeparateItem type={'coffee'}/>
            }
          }/>
          <Route path ='/about/' exact component={Main}/>
        </Switch>
      </Router>
    <RegularFooter/>
  </>  
)

export default AboutPage