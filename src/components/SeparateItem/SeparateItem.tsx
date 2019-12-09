import * as React from 'react'
import {connect} from 'react-redux'
import './separateItem.sass'
import * as imgBeans from '../../logo/Beans_logo_dark.svg'
import NotFound from '../NotFound/NotFound'

interface IPropSeparateItem {
  productList: Array<any>
  itemId: number,
  type?: string
}

const SeparateItem = (props: IPropSeparateItem):JSX.Element => {
  const{productList, itemId, type} = props
  if(!productList) return (
    <NotFound/>
  )
  let item
  switch(type) {
    case 'coffee' :
      item = productList.coffee.filter(el => el.id === itemId)
    case 'main' :
      item = productList.bestsellers.filter(el => el.id === itemId)
    case 'pleasure' :
      item = productList.goods.filter(el => el.id === itemId)
  }
  return (
    <div>
      {
        item.map(el => {
          return (
            <div className="row seperate-item__wrapper" key={el.id}>
              <div className="col-lg-4 offset-2">
                <img className='seperate-item__img' src={el.url}/>
              </div>
              <div className="col-lg-4">
                <div className="title">{el.name}</div>
                <img className="beanslogo" src={imgBeans} alt="Beans logo"/>
                <div>
                  {el.description}
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = ({productList, itemId}) => {
  return {
    productList,
    itemId
  }
}


export default connect(mapStateToProps)(SeparateItem)