import { useReducer } from 'react'
import type { ReactNode } from 'react'
import ProductContext from './productContext'
import ProductReducer from './productReducer'
import { products } from '../products'

const initialState = {
  products,
  isLoading: true
}
export type State = typeof initialState

const ProductState = ({ children }: { children: ReactNode }) => {
  const [state] = useReducer(ProductReducer, initialState)

  return (
    <ProductContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductState
