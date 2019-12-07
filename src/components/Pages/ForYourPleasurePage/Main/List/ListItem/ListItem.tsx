import * as React from 'react'
import './listItem.sass'

interface IPropListItem {
  goods: Array<any>
}

const ListItem = (props: IPropListItem): JSX.Element => {
  const{goods} = props
  return (
    <>
      {
        goods.map((el, index) => {
          return (
            <div className="pleasure__item" key={index}>
              <img src={el.url} alt="coffee"/>
              <div className="pleasure__item-title">
                {el.name}
              </div>
              <div className="pleasure__item-price">{el.price}</div>
            </div>
          )
        })
      }
    </>
  )
}

export default ListItem
