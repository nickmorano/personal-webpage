/** @jsxImportSource @emotion/react */
import Grid from '@mui/material/Grid';
import Product from './Product/Product';

const Products = ({ cart, products, onAddToCart }) => {
  if (!products.length) return <p>Loading...</p>;

  return (
    <Grid container justify="center" spacing={1} sx={{mt: 0}}>
      {products.map((product) => (
        <Grid key={product.id} item xs={6} sm={6} md={4} lg={4}>
          <Product product={product} onAddToCart={onAddToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;