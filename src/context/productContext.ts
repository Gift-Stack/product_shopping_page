import { createContext } from 'react'
import { products } from '../products'

type ProductContextInterface = {
  products: typeof products
  isLoading: boolean
  getProducts(): void
}

const defaultValues = {
  products: [],
  isLoading: true
}

const ProductContext = createContext<
  ProductContextInterface | typeof defaultValues
>(defaultValues)

export default ProductContext
