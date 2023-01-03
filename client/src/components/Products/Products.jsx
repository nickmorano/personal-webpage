/** @jsxImportSource @emotion/react */
import Grid from '@mui/material/Grid';
import Product from './Product/Product';
import Navbar from '../Navbar/Navbar';
import { css } from '@emotion/react';
import { useState } from 'react'

const Products = ({ cart, products, onAddToCart }) => {
  if (!products.length) return <p>Loading...</p>;

  return (
    <Grid container justify="center" spacing={4} sx={{mt: "5px"}}>
      {products.map((product) => (
        <Grid key={product.id} item xs={6} sm={6} md={4} lg={4}>
          <Product product={product} onAddToCart={onAddToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;