import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { CartItemType, ProductIdType } from '../../App'

interface ProductType {
  product: CartItemType<ProductIdType>
  addToCart(arg: CartItemType<ProductIdType>): void
  setOpen(arg: boolean): void
}

const Product = (props: ProductType) => {
  const {
    product: { name, price, imageUrl, category, productId },
    addToCart,
    setOpen
  } = props

  return (
    <Grid item>
      <Paper
        sx={{
          border: 'none',
          boxShadow: 'none',
          height: 350,
          width: 240,
          padding: '0 40px',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <img src={imageUrl} alt="Product" height="50%" width="100%" />
        <div>
          <Typography
            paragraph
            align="center"
            fontSize="small"
            fontWeight={600}
          >
            {name.split(',')[0]}
          </Typography>
          <Typography padding={0}>
            <b>${price / 100}</b>
          </Typography>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 20
          }}
        >
          <Button
            variant="outlined"
            startIcon={<ControlPointIcon />}
            style={{
              color: 'rgba(56, 194, 222, 1)',
              borderColor: 'rgba(215, 215, 215, 1)',
              borderRadius: 0,
              fontSize: '12px'
            }}
            onClick={() => {
              addToCart(props.product)
              setOpen(true)
            }}
          >
            Add to Cart
          </Button>
        </div>
      </Paper>
    </Grid>
  )
}

export default Product
