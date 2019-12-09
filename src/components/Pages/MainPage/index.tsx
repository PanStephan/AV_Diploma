import * as React from 'react'
import Main from './Main/Main'
import Header from './Header/Header'
import RegularFooter from '../../RegularFooter/RegularFooter'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SeparateItem from '../../SeparateItem/SeparateItem'

const MainPage = (): JSX.Element => (
  <>
    <Header/>
    <Router>
        <Switch>
          <Route path='/:id' exact render = {
            () => { 
              return <SeparateItem type={'main'}/>
            }
          }/>
          <Route path ='/' exact component={Main}/>
        </Switch>
      </Router>
    <RegularFooter/>
  </>  
)

export default MainPage