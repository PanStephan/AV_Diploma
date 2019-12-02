import * as React from 'react'
import './header.sass'
import Navigation from '../../Navigation/Navigation'
import Hero from './Hero/Hero'


const Header = (): JSX.Element => (
  <div className="preview">
    <div className="container">
      <Navigation/>
      <Hero/>
    </div>
  </div>
)

export default Header