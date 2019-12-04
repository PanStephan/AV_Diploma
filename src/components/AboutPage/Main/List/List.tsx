import * as React from 'react'
import {productListLoaded, productListReq} from '../../../../actions'
import {connect} from 'react-redux'
import WithProductListService from '../../../HOC/WithProductListService'
import Loader from '../../../Loader/Loader'
import ListItem from './ListItem/ListItem'
import './list.sass'
import SearchPanel from '../../SearchPanel/SearchPanel'


interface IPropList {
  ProductListService: any,
  productListLoaded(res?: object): object
  productListReq(): object,
  coffee: any,
  loading: boolean
}

class List extends React.Component<IPropList> {
  componentDidMount() {
    const{ProductListService, productListLoaded, productListReq} =  this.props
    productListReq()
    ProductListService.getProductList()
      .then(res => productListLoaded(res))
      // .catch(menuErr) 
  }
  render() {
    const{coffee, loading} = this.props
     return (
      <> 
        {loading ? <Loader className={'center'}/> : <SearchPanel labelBtn={coffee}/>}
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="shop__wrapper">
              {loading ? <Loader className={'center'}/> : <ListItem coffee={coffee}/>}
            </div>
          </div>
        </div>
      </>  
    )
  }

}

const mapStateToProps = ({productList, loading}) => {
  return {
    coffee: productList.coffee,
    loading
  }
}

const mapDispatchToProps = {
  productListLoaded,
  productListReq
}

export default WithProductListService()(connect(mapStateToProps, mapDispatchToProps)(List))
