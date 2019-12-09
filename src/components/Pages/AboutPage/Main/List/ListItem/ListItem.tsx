import * as React from 'react'
import {connect} from 'react-redux'
import './listItem.sass'
import {getSeparateCoffeeItem} from '../../../../../../actions'
import {withRouter} from 'react-router-dom'

interface IPropListItem {
  coffee: any | Array<any>,
  history?: any,
  getSeparateCoffeeItem?(number)
}

class ListItem extends React.Component<any, IPropListItem> {

  onItemSelected = (id) => {
    const{getSeparateCoffeeItem} = this.props
    this.props.history.push(id)
    getSeparateCoffeeItem(id)
  }

  render() {
    const{coffee} = this.props
    return (
      <>
        {
          coffee.map((el) => {
            return (
              <div className="shop__item" key={el.id} onClick={this.onItemSelected.bind(this, el.id)}>
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
  
}

const mapDispatchToProps = {
  getSeparateCoffeeItem
}

export default connect(null, mapDispatchToProps)(withRouter(ListItem))
