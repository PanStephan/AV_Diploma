import React,{ useState } from 'react'
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

  const [description, setDescription] = useState('...');

  const{productList, itemId, type} = props
  if(!productList) return (
    <NotFound/>
  )

  let item
  switch(type) {
    case 'coffee' :
      item = productList.coffee.filter(el => el.id === itemId)
      break
    case 'main' :
      item = productList.bestsellers.filter(el => el.id === itemId)
      break
    case 'pleasure' :
      item = productList.goods.filter(el => el.id === itemId)
      break
  }
  const onClickSpan = (description) => {
    setDescription(description.slice(200))
  }

  return (
    <div>
      {
        item.map(el => {
          if(el.description.length > 200) {
            el.description.slice(0, 200)
            return (
              <div className="row seperate-item__wrapper" key={el.id}>
                <div className="col-lg-4 offset-2">
                  <img className='seperate-item__img' src={el.url}/>
                </div>
                <div className="col-lg-4">
                  <div className="title">{el.name}</div>
                  <img className="beanslogo" src={imgBeans} alt="Beans logo"/>
                  <div className='seperate-item__description'>
                    {el.description}<span onClick={onClickSpan.bind(this, el.description)}>{description}</span>
                  </div>
                </div>
              </div>
            )
          }
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