import * as React from 'react'
import './header.sass'
import * as img from '../../../logo/Beans_logo.svg'
import RegularBtn from '../../Buttons/RegularBtn/RegularBtn'
import RegularHeader from '../../RegularHeader/RegularHeader'
import * as logoImg from '../../../logo/Logo.svg'

const Header = (): JSX.Element => (
  <div className="row">
    <div className="col-lg-10 offset-lg-1">
        <h1 className="title-big">Everything You Love About Coffee</h1>
        <img className="beanslogo" src={img} alt="Beans logo"/>
        <div className="preview__subtitle">We makes every day full of energy and taste</div>
        <div className="preview__subtitle">Want to try our beans?</div>
        <RegularBtn href={'#'} className={"preview__btn"} text={'More'}/>
    </div>
  </div>
)

export default RegularHeader(logoImg, 'preview')(Header)

