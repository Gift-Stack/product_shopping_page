import { GET_PRODUCTS } from './types'
import { State } from './ProductState'

type Action = {
  type: typeof GET_PRODUCTS
  payload: any
}
// eslint-disable-next-line
export default (state: State, action: Action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}
