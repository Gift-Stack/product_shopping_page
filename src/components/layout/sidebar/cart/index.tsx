import { useState } from 'react'
import { CartItemType, ProductIdType } from '../../../../App'
import { Box, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

interface CartType {
  cart: CartItemType<ProductIdType>
  deleteItem(arg: string): void
}

const CartItem = (props: CartType) => {
  const [qty, setQty] = useState(1)
  const {
    cart: { productId, imageUrl, name, price },
    deleteItem
  } = props
  return (
    <Box margin={0}>
      <Box display="flex" gap={1} alignItems="center">
        <img src={imageUrl} alt="Cart icon" width="50px" height="50px" />
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography fontSize={13} fontWeight={600}>
            {name.split(',')[0]}
          </Typography>
          <Typography fontSize={13}>
            ${((price / 100) * qty).toFixed(2)}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton
            aria-label="delete"
            style={{ color: '#999' }}
            onClick={() => qty > 1 && setQty(qty - 1)}
          >
            -
          </IconButton>
          <p
            contentEditable
            style={{
              padding: '1px 10px',
              border: '1px solid #999',
              borderRadius: 5
            }}
          >
            {qty}
          </p>
          <IconButton
            aria-label="delete"
            style={{ color: '#999' }}
            onClick={() => setQty(qty + 1)}
          >
            +
          </IconButton>
        </Box>
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => deleteItem(productId.value)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default CartItem
