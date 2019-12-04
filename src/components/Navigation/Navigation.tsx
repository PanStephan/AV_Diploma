import * as React from 'react'
import './navigaton.sass'
import * as img from '../../logo/Logo.svg'

const Navigation = (): JSX.Element =>  {
  return (
    <div className="row">
        <div className="col-lg-6">
            <header>
                <ul className="header">
                    <li className="header__item">
                        <a href="#">
                          <img src={img} alt="logo"/>
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="#">Our coffee</a>
                    </li>
                    <li className="header__item">
                        <a href="#">For your pleasure</a>
                    </li>
                </ul>
            </header>
        </div>
    </div>
  )
}

export default Navigation