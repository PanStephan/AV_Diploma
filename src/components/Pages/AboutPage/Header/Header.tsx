import * as React from 'react'
import RegularHeader from '../../../RegularHeader/RegularHeader'
import * as logoImg from '../../../../logo/Logo.svg'
import './header.sass'

const Header = (): JSX.Element => (
  <h2 className='about__title'>
    Our Coffee
  </h2>
)

export default RegularHeader(logoImg,'banner')(Header)