import * as React from 'react'
import './regularFooter.sass'
import * as logoBlack from '../../logo/Logo_black.svg'
import * as logoDark from '../../logo/Beans_logo_dark.svg'
import Navigation from '../Navigation/Navigation'

const RegularFooter = (): JSX.Element => (
  <footer>
    <div className="container">
        <div className="row">
          <div className="offset-lg-4">
            <ul className="footer">
              <Navigation color={'black'} img={logoBlack}/>
            </ul>
          </div>
        </div>
        <img className="beanslogo" src={logoDark} alt="Beans logo"/>
      </div>
  </footer>
)

export default RegularFooter
