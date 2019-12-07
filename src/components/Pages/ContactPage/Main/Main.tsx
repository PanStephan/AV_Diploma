import * as React from 'react'
import './main.sass'
import Form from './Form/Form'
import RegularFooter from '../../../RegularFooter/RegularFooter'
import * as logoDark from '../../../../logo/Beans_logo_dark.svg'

const Main = () => (
  <>
    <div className="contact__wrapper">
      <h4 className='contact__text'>Tell us about your tastes</h4>
      <img className="beanslogo" src={logoDark} alt="Beans logo"/>
      <Form/>
    </div>
    <RegularFooter/>
  </>
) 

export default Main