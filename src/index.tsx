import * as React from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import App from './components/App/App'
import {Provider} from 'react-redux'
import ProductListService from './services/productListService'
import store from './store'
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry'
import {BrowserRouter as Router} from 'react-router-dom'
import ProductListContext from './components/ProductListContext/ProductListContext'

const productListService = new ProductListService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ProductListContext.Provider value={productListService}>
        <Router>
          <App/> 
        </Router>
      </ProductListContext.Provider>
    </ErrorBoundry>
  </Provider>
  ,document.getElementById('app'))