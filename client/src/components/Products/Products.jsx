/** @jsxImportSource @emotion/react */
import {Grid, Container} from '@mui/material';
import Product from './Product/Product';

const Products = ({ cart, products, onAddToCart }) => {
  if (!products.length) return <p>Loading...</p>;

  return (
    <Container>
      <Grid container spacing={1} sx={{mt: 0}}>
        {products.map((product) => (
          <Grid item key={product.id} xs={6} sm={6} md={4} lg={4}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;