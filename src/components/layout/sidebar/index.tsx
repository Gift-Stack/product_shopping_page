// Required dependencies
import { useTheme } from '@mui/material/styles'
import Drawer from '@mui/material/Drawer'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

// Icons
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import { DrawerHeader, drawerWidth } from '../styles'
import CartItem from './cart'
import { CartItemType, ProductIdType } from '../../../App'

// Props type
interface PropsType {
  open: boolean
  handleDrawerClose(): void
  cartItems: CartItemType<ProductIdType>[]
}

const Sidebar = (props: PropsType) => {
  const { open, handleDrawerClose, cartItems } = props
  const theme = useTheme()

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth
        }
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ArrowBackRoundedIcon sx={{ color: 'rgba(2, 160, 242, 1)' }} />
          ) : (
            <ArrowForwardRoundedIcon sx={{ color: 'rgba(2, 160, 242, 1)' }} />
          )}
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          fontSize="small"
          fontWeight="bolder"
        >
          Your cart
        </Typography>
        <ShoppingCartOutlinedIcon sx={{ color: 'rgba(119, 119, 119, 1)' }} />
      </DrawerHeader>
      <Paper
        style={{
          margin: '10px 15px',
          padding: '10px',
          background: 'rgba(245, 242, 234, 0.5)',
          minHeight: '89%'
        }}
      >
        {cartItems.length > 0 &&
          cartItems?.map((cart) => <CartItem key={cart?.productId?.value} />)}
      </Paper>
    </Drawer>
  )
}

export default Sidebar
