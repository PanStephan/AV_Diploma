import * as React from 'react'

interface IPropRegularInfo{
  text: string, 
  majorImg: string, 
  icon: string
}

const RegularInfo = (props: IPropRegularInfo): JSX.Element => {
  const{text, majorImg, icon} = props
  return (
    <>
      <div className="row">
        <div className="col-lg-4 offset-2">
          <img src={majorImg}/>
        </div>
        <div className="col-lg-4">
          <div className="title">About our beans</div>
          <img className="beanslogo" src={icon} alt="Beans logo"/>
          <div>
            {text}
          </div>
        </div>
      </div>
      <div className="line"></div>
    </> 
  ) 
}


export default RegularInfo