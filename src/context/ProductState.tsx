import { useReducer } from 'react'
import type { ReactNode } from 'react'
import ProductContext from './productContext'
import ProductReducer from './productReducer'
import { GET_PRODUCTS } from './types'
import { products } from '../products'

const initialState = {
  products,
  isLoading: true
}
export type State = typeof initialState

const ProductState = ({ children }: { children: ReactNode }) => {
  const [state] = useReducer(ProductReducer, initialState)

  // fetch products
  // const getProducts = async () => {
  //   // const res = await fetch('../products.json')
  //   // const data = await res.json()
  //   dispatch({ type: GET_PRODUCTS, payload: products })
  // }

  return (
    <ProductContext.Provider
      value={{
        ...state
        // getProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductState
