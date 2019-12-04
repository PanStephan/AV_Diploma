import * as React from 'react'
import SearchForm from './SearchForm/SearchForm'
import RegularButton from '../../Buttons/RegularBtn/RegularBtn'

interface IPropSearchPanel {
  labelBtn: Array<any>
}

const SearchPanel = (props: IPropSearchPanel): JSX.Element => {
  const{labelBtn} = props
  return (
    <div className="row">
      <SearchForm/>
      <div>
        {
          labelBtn.map((el, index) => {
            return (
              <RegularButton text={el.country} key={index} className={'shop__filter-btn'}/>
            )  
          })
        }
      </div>
    </div>
  )
}

export default SearchPanel
