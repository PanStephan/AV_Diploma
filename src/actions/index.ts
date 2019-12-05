const productListLoaded = product => {
  return {
    type: 'PRODUCT_LOADED',
    payload: product
  }
}

const productListReq = () => {
  return {
    type: 'PRODUCT_REQ',
  }
}

const productFilter = (value) => {
  return {
    type: 'PRODUCT_FILTER',
    payload: {
      value, 
    }
  }
}

export {
  productListLoaded,
  productListReq,
  productFilter
}