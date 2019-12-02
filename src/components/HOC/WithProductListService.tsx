import * as React from 'react';
import ProductListContext from '../ProductListContext/ProductListContext';

const WithProductListService = () => (Wrapper) => {
  return (props) => {
    return (
      <ProductListContext.Consumer>
        {
          (ProductListService) => {
            return <Wrapper {...props} ProductListService={ProductListService}/>
          }
        }
      </ProductListContext.Consumer>
    )
  }
};

export default WithProductListService;