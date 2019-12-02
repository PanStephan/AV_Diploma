import * as React from 'react'
import './header.sass'
import Navigaton from '../Navigaton/Navigaton'
import Hero from '../Hero/Hero'


const Header = (): JSX.Element => (
  <header className="preview">
    <div className="container">
      <Navigaton/>
      <Hero/>
    </div>
  </header>
)

export default Header