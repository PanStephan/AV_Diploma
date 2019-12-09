import * as React from 'react'
import './best-item.sass'

interface IPropBestItems {
  bestsellers: Array<any>
}

const BestItem = (props: IPropBestItems): JSX.Element => {
  const {bestsellers} = props
  return (
    <>
      {bestsellers.map((el, index) => {
        return (
          <div className="best__item" key={index}>
            <img src={el.url} alt="coffee"/>
            <div className="best__item-title">
              {el.name}
            </div>
            <div className="best__item-price">{el.price}</div>
          </div>
        )
      })}
    </> 
  )
}

export default BestItem