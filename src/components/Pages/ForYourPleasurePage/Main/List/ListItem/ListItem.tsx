import * as React from 'react'
import './listItem.sass'
import {getSeparateCoffeeItem} from '../../../../../../actions'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

interface IPropListItem {
  goods: Array<any>,
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
    const{goods} = this.props
    return (
      <>
        {
          goods.map((el, index) => {
            return (
              <div className="pleasure__item" key={index} onClick={this.onItemSelected.bind(this, el.id)}>
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
}

const mapDispatchToProps = {
  getSeparateCoffeeItem
}

export default connect(null, mapDispatchToProps)(withRouter(ListItem))

