import * as React from 'react';
import ProductListContext from '../ProductListContext/ProductListContext';

const WithProductListService = (): Function => (Wrapper): Function => {
  return (props: any): JSX.Element => {
    return (
      <ProductListContext.Consumer>
        {
          (ProductListService): JSX.Element => {
            return <Wrapper {...props} ProductListService={ProductListService}/>
          }
        }
      </ProductListContext.Consumer>
    )
  }
};

export default WithProductListService;