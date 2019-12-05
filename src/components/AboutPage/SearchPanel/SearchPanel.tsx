import * as React from 'react'
import SearchForm from './SearchForm/SearchForm'
import RegularBtn from '../../Buttons/RegularBtn/RegularBtn'
import './searchPanel.sass'
import {productFilter} from '../../../actions'
import {connect} from 'react-redux'

interface IPropSearchPanel {
  labelBtn: Array<any>,
  productFilter(props: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void
}

const SearchPanel = (props: IPropSearchPanel): JSX.Element => {
  const{labelBtn} = props
  const noRepeatedLabelBnt = labelBtn.map(el => {
    return el.country
  })

  const onFilterClicked = (event) => {
    props.productFilter(event.target.text)
  }

  return (
    <div className="row">
      <SearchForm/>
      <div className="shop__filter-group">
        <span>Or Filter</span>
        {
          [... new Set(noRepeatedLabelBnt)].map((el, index) => {
            return (
              <RegularBtn onClick={onFilterClicked} text={el} key={index} className={'shop__filter-btn'}/>
            )  
          })
        }
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  productFilter
}

export default connect(null, mapDispatchToProps)(SearchPanel)
