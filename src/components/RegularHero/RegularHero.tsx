import * as React from 'react'

interface IPropRegularHero {
  text: string, 
  majorImg: string, 
  icon: string
}

const RegularHero = (props: IPropRegularHero): JSX.Element => {
  const{text, majorImg, icon} = props
  return (
    <>
      <div className="row">
        <div className="col-lg-4 offset-2">
          <img className="shop__girl" src={majorImg} alt="girl"/>
        </div>
        <div className="col-lg-4">
          <div className="title">About our beans</div>
          <img className="beanslogo" src={icon} alt="Beans logo"/>
          <div className="shop__text">
              {text}
          </div>
        </div>
      </div>
      <div className="line"></div>
    </> 
  )
   
}


export default RegularHero