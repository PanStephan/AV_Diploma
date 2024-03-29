/*eslint-disable*/
import {createStore} from 'redux'
import reducer from './reducers'

// redux tools turn on
const store = createStore(
  reducer, /* preloadedState, */
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

export default store