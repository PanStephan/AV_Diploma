interface IPropState {
  productList: Array<any>,
  loading: boolean,
  filterValue: string
}

const initialState:IPropState = {
  productList: [],
  loading: true,
  filterValue: null
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
    case 'PRODUCT_FILTER': 
      return {
        ...state,
        filterValue: payload
      }
    default: 
      return state
  }
}

export default reducer