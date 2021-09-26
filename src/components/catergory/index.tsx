import Button from '@mui/material/Button'

type CategoryType = {
  category: string
  filterProduct(arg: string): void
}

const Category = (props: CategoryType) => {
  const { category, filterProduct } = props
  return (
    <Button
      variant="outlined"
      style={{
        borderRadius: 50,
        borderColor: '#999',
        color: '#333',
        fontWeight: 600,
        fontSize: 'small',
        margin: 10,
        marginBottom: 30
      }}
      onClick={() => filterProduct(category)}
    >
      {category}
    </Button>
  )
}

export default Category
