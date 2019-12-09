import * as React from 'react'
import './best-item.sass'
import {getSeparateCoffeeItem} from '../../../../../../actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
interface IPropBestItems {
  bestsellers: Array<any>,
  history?: any,
  getSeparateCoffeeItem?(number)
}

class BestItem extends React.Component<any, IPropBestItems> {

  onItemSelected = (id) => {
    const{getSeparateCoffeeItem} = this.props
    this.props.history.push(id)
    getSeparateCoffeeItem(id)
  }

  render() {
    const {bestsellers} = this.props
    return (
      <>
        {bestsellers.map((el, index) => {
          return (
            <div className="best__item" key={index} onClick={this.onItemSelected.bind(this, el.id)}>
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
}

const mapDispatchToProps = {
  getSeparateCoffeeItem
}

export default connect(null, mapDispatchToProps)(withRouter(BestItem))