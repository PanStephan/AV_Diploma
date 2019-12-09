import * as React from 'react'
import './best.sass'
import BestItem from './BestItem/BestItem'
import WithProductListService from '../../../../HOC/WithProductListService'
import {productListLoaded, productListReq} from '../../../../../actions'
import {connect} from 'react-redux'
import Loader from '../../../../Loader/Loader'

interface IPropBest {
  ProductListService: any,
  productListLoaded(res?: object): object
  productListReq(): object,
  bestsellers: any,
  loading: boolean
}

class Best extends React.Component<IPropBest> {

  componentDidMount() {
    const{ProductListService, productListLoaded, productListReq} =  this.props
    productListReq()
    ProductListService.getProductList()
      .then(res => productListLoaded(res))
      .catch(err => console.log(err))
  }

  render() {
    const{bestsellers, loading} = this.props
     return (
      <section className="best">
        <div className="container">
            <div className="title">Our best</div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="best__wrapper">
                      {loading ? <Loader className={'center'}/> : <BestItem bestsellers={bestsellers}/>}
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({productList, loading}) => {
  return {
    bestsellers: productList.bestsellers,
    loading
  }
}

const mapDispatchToProps = {
  productListLoaded,
  productListReq
}

export default WithProductListService()(connect(mapStateToProps, mapDispatchToProps)(Best))