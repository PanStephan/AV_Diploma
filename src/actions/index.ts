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

export {
  productListLoaded,
  productListReq
}