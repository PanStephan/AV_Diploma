import * as React from 'react'
import * as imgGirl from '../../../../img/coffee_girl.jpg'
import * as imgBeans from '../../../../logo/Beans_logo_dark.svg'
import './main.sass'
import List from './List/List'
import RegularHero from '../../../RegularHero/RegularHero'

const textForHero = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
Afraid at highly months do things on at. Situation recommend objection do intention
so questions. 
As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face.`

const Main = (): JSX.Element => (
  <section className="shop">
    <div className="container">
      <RegularHero text={textForHero} icon={imgBeans} majorImg={imgGirl}/>
      <List/>
    </div>
  </section>
)

export default Main