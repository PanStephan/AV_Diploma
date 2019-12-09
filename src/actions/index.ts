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

const getSeparateCoffeeItem = (id) => {
  return {
    type: 'GET_SEPARATE_COFFEE_ITEM',
    payload: id
  }
}

const productFilter = (value) => {
  return {
    type: 'PRODUCT_FILTER',
    payload: value
  }
}

export {
  productListLoaded,
  productListReq,
  productFilter,
  getSeparateCoffeeItem
}