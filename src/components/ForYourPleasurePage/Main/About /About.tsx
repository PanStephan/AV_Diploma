import * as React from 'react'
import * as imgPleasure from '../../../../img/pleasure-page.png'
import * as imgBeans from '../../../../logo/Beans_logo_dark.svg'

const About = (): JSX.Element => (
  <>
    <div className="row">
      <div className="col-lg-4 offset-2">
        <img className="pleasure__img" src={imgPleasure} alt="girl"/>
      </div>
      <div className="col-lg-4">
        <div className="title">About our goods</div>
        <img className="beanslogo" src={imgBeans} alt="Beans logo"/>
        <div className="pleasure__text">
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
          Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. 
          As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.
        </div>
      </div>
    </div>
    <div className="line"></div>
  </>  
)

export default About
