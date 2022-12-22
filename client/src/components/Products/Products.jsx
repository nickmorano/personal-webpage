/** @jsxImportSource @emotion/react */
import Grid from '@mui/material/Grid';
import Product from './Product/Product';
import {css} from '@emotion/react';

const Products = ({ products, onAddToCart }) => {

  if (!products.length) return <p>Loading...</p>;

  const navbar = css({
    paddingTop: '200px',
  })


  return (
    <main className="content">
      <div css={navbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={2}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;