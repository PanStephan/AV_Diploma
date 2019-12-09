import * as React from 'react'
import './notFound.sass'
import * as img from '../../img/404.jpg'

const NotFound = (): JSX.Element => (
  <div className='not-found'>
    <img src={img} className='not-found__img' alt="Not Found"/>
  </div>
)

export default NotFound

