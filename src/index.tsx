import * as React from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import App from './components/App/App'
import {Provider} from 'react-redux'
import ProductListService from './services/productListService'
import store from './store'
import {BrowserRouter as Router} from 'react-router-dom'
import ProductListContext from './components/ProductListContext/ProductListContext'

const productListService = new ProductListService()

ReactDOM.render(
  <Provider store={store}>
    <ProductListContext.Provider value={productListService}>
      <Router>
        <App/> 
      </Router>
    </ProductListContext.Provider>
  </Provider>
  ,document.getElementById('app'))