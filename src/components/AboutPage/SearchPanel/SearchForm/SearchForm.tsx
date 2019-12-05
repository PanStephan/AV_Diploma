import * as React from 'react'
import RegularInput from '../../../Inputs/RegularInput/RegularInput'
import {productFilter} from '../../../../actions'
import {connect} from 'react-redux'

interface IPropSearchFrom {
  productFilter(prop : object): void
}

class SearchForm extends React.Component<IPropSearchFrom> {

  onInputChange = (event) => {
    this.props.productFilter(event.target.value)
  }
  
  render() {
    return (
      <div className="col-lg-4 offset-2">
        <form action="#" className="shop__search">
          <label className="shop__search-label">Looking for</label>
          <RegularInput onChange={this.onInputChange} type="text" placeholder="start typing here..." className="shop__search-input"/>
        </form>
      </div>
    )
  }
  
}

const mapDispatchToProps = {
  productFilter
}

export default connect(null, mapDispatchToProps)(SearchForm)