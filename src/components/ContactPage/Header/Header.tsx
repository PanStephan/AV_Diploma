import * as React from 'react'
import * as logoImg from '../../../logo/Logo.svg'
import RegularHeader from '../../RegularHeader/RegularHeader'
import './header.sass'

const Header: React.FC = () => (
  <h2 className='contact__title'>
    Contact us
  </h2>
)

export default RegularHeader(logoImg,'pleasure-banner')(Header)
