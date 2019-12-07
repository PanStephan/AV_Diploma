import * as React from 'react'
import './listItem.sass'

interface IPropListItem {
  coffee: Array<any>
}

const ListItem = (props: IPropListItem): JSX.Element => {
  const{coffee} = props
  return (
    <>
      {
        coffee.map((el, index) => {
          return (
            <div className="shop__item" key={index}>
              <img src={el.url} alt="coffee"/>
              <div className="shop__item-title">
                {el.name}
              </div>
              <div className="shop__item-country">{el.country}</div>
              <div className="shop__item-price">{el.price}</div>
            </div>
          )
        })
      }
    </>
  )
}

export default ListItem
