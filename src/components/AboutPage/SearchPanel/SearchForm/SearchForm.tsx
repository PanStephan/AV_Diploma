import * as React from 'react'
import RegularInput from '../../../Inputs/RegularInput/RegularInput'

const SearchForm = (): JSX.Element => (
  <div className="col-lg-4 offset-2">
    <form action="#" className="shop__search">
      <label className="shop__search-label">Looking for</label>
      <RegularInput type="text" placeholder="start typing here..." className="shop__search-input"/>
      {/* <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"/> */}
    </form>
  </div>
)

export default SearchForm