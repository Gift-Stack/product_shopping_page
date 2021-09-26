import type { ReactNode } from 'react'

// Mui drawer dependencies
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'

import Sidebar from './sidebar'
import Topnav from './topnav'
import { CartItemType, ProductIdType } from '../../App'

interface AppLayoutProps {
  children: ReactNode
  open: boolean
  setOpen(arg: boolean): void
  cartItems: CartItemType<ProductIdType>[]
}

const AppLayout = (props: AppLayoutProps) => {
  const { children, open, setOpen, cartItems } = props

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Topnav open={open} handleDrawerOpen={handleDrawerOpen} />
      {children}
      <Sidebar
        open={open}
        handleDrawerClose={handleDrawerClose}
        cartItems={cartItems}
      />
    </Box>
  )
}

export default AppLayout
