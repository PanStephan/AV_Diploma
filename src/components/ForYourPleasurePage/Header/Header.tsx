import * as React from 'react'
import RegularHeader from '../../RegularHeader/RegularHeader'
import * as logoImg from '../../../logo/Logo.svg'
import './header.sass'

const Header = (): JSX.Element => (
  <h2 className='pleasure__title'>
    For your pleasure
  </h2>
)

export default RegularHeader(logoImg,'pleasure-banner')(Header)