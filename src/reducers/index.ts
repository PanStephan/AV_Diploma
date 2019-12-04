interface IPropState {
  productList: Array<any>,
  loading: boolean
}

const initialState:IPropState = {
  productList: [],
  loading: true
}

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type) {
    case 'PRODUCT_LOADED':
      return {
        ...state,
        productList: payload.data,
        loading: false
      }
    case 'PRODUCT_REQ':
      return {
        ...state,
      }
    default: 
      return state
  }
}

export default reducer