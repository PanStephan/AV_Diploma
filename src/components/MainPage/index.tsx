import * as React from 'react'
import Main from './Main/Main'
import Header from './Header/Header'
import RegularFooter from '../RegularFooter/RegularFooter'

const MainPage = (): JSX.Element => (
  <>
    <Header/>
    <Main/>
    <RegularFooter/>
  </>  
)

export default MainPage