import { useState, useContext, useEffect } from 'react'
import './App.css'
import AppLayout from './components/layout'

// Required deps
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Main, DrawerHeader } from './components/layout/styles'

// Product Context
import ProductContext from './context/productContext'
import Product from './components/product'
import Category from './components/catergory'

// Asset
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'

export type ProductIdType = {
  value: string
}
export interface CartItemType<Type> {
  name: string
  price: number
  imageUrl: string
  category: string
  productId: Type
}

function App() {
  const [open, setOpen] = useState<boolean>(true)
  const [items, setItems] = useState<CartItemType<ProductIdType>[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [cartItems, setCartItems] = useState<CartItemType<ProductIdType>[]>([])

  const context = useContext(ProductContext)
  const { products } = context

  useEffect(() => {
    const categoriesSet = new Set(
      products
        ?.map((product) => product.category, [])
        .filter((category) => category.length > 0)
    )
    const categories = Array.from(categoriesSet)
    setCategories(categories)

    // Set items
    setItems(products)
  }, [products])

  const filterProduct = (category: string | null) => {
    setItems(
      typeof category === 'string'
        ? products.filter((item) => item.category === category)
        : products
    )
  }

  const addToCart = (product: CartItemType<ProductIdType>) => {
    const hasBeenAdded = cartItems.filter(
      (cartItem) => cartItem.productId.value === product.productId.value
    )
    if (hasBeenAdded.length === 0) setCartItems([...cartItems, product])
  }

  const deleteItem = (id: string) => {
    const returnValue = cartItems.filter((item) => item.productId.value !== id)
    setCartItems(returnValue)
  }

  return (
    <AppLayout
      open={open}
      setOpen={setOpen}
      cartItems={cartItems}
      deleteItem={deleteItem}
    >
      <Main open={open}>
        <DrawerHeader />
        <Typography fontWeight="bolder" fontSize="smaller">
          Shop by categories
        </Typography>
        {categories &&
          categories?.map((category: string, index) => (
            <Category
              key={index}
              category={category}
              filterProduct={filterProduct}
            />
          ))}
        <IconButton
          style={{
            borderRadius: 50,
            border: '1px solid #999',
            color: '#333',
            fontWeight: 'bolder',
            fontSize: 'small',
            margin: 10,
            marginBottom: 30,
            padding: 3
          }}
          onClick={() => filterProduct(null)}
        >
          <PlaylistAddCheckIcon />
        </IconButton>

        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {products &&
              items?.map((product: CartItemType<ProductIdType>) => (
                <Product
                  key={product.productId.value}
                  product={product}
                  addToCart={addToCart}
                  setOpen={setOpen}
                />
              ))}
          </Grid>
        </Grid>
      </Main>
    </AppLayout>
  )
}

export default App
