import * as React from 'react'
import {productListLoaded, productListReq} from '../../../../../actions'
import {connect} from 'react-redux'
import WithProductListService from '../../../../HOC/WithProductListService'
import Loader from '../../../../Loader/Loader'
import ListItem from './ListItem/ListItem'
import './list.sass'
import SearchPanel from '../../SearchPanel/SearchPanel'

interface IPropList {
  ProductListService: any,
  productListLoaded(res?: object): object
  productListReq(): object,
  coffee: any,
  loading: boolean,
  filterValue: any
}

class List extends React.Component<IPropList> {

  componentDidMount() {
    const{ProductListService, productListLoaded, productListReq} =  this.props
    productListReq()
    ProductListService.getProductList()
    .then(res => productListLoaded(res))
    .catch(err => console.log(err))
  }

  filterPosts = () => {
    const{coffee, filterValue} = this.props
    if(filterValue === null) return coffee
    return coffee.filter(el => {
      return el.name.toLowerCase().indexOf(filterValue) > -1 
      || el.country.toLowerCase().indexOf(filterValue.toLowerCase()) > -1
    })
  }

  render() {
    const{coffee, loading} = this.props
    const filteredData = this.filterPosts()
    if(!coffee) return null
     return (
      <> 
        {loading ? <Loader className={'center'}/> : <SearchPanel labelBtn={coffee}/>}
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="shop__wrapper">
              {loading ? <Loader className={'center'}/> : <ListItem coffee={filteredData}/>}
            </div>
          </div>
        </div>
      </>  
    )
  }

}

const mapStateToProps = ({productList, loading, filterValue}) => {
  return {
    coffee: productList.coffee,
    loading,
    filterValue
  }
}

const mapDispatchToProps = {
  productListLoaded,
  productListReq
}

export default WithProductListService()(connect(mapStateToProps, mapDispatchToProps)(List))
