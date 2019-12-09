import * as React from 'react'
import {productListLoaded, productListReq} from '../../../../../actions'
import {connect} from 'react-redux'
import WithProductListService from '../../../../HOC/WithProductListService'
import Loader from '../../../../Loader/Loader'
import ListItem from './ListItem/ListItem'
import './list.sass'


interface IPropList {
  ProductListService: any,
  productListLoaded(res?: object): object
  productListReq(): object,
  goods: any,
  loading: boolean,
}

class List extends React.Component<IPropList> {

  componentDidMount() {
    const{ProductListService, productListLoaded, productListReq} =  this.props
    productListReq()
    ProductListService.getProductList()
    .then(res => productListLoaded(res))
    .catch(err => console.log(err))
  }

  render() {
    const{goods, loading} = this.props

    if(!goods) return null
     return (
      <> 
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="pleasure__wrapper">
              {loading ? <Loader className={'center'}/> : <ListItem goods={goods}/>}
            </div>
          </div>
        </div>
      </>  
    )
  }

}

const mapStateToProps = ({productList, loading}) => {
  return {
    goods: productList.goods,
    loading,
  }
}

const mapDispatchToProps = {
  productListLoaded,
  productListReq
}

export default WithProductListService()(connect(mapStateToProps, mapDispatchToProps)(List))
