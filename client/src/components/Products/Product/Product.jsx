/** @jsxImportSource @emotion/react */
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { css } from '@emotion/react';

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);

  const image = css({
    maxHeight: '250 px',
    maxWidth: '250 px'
  });

  const card = css({
    maxHeight: '250 px',
    maxWidth: '250 px'
  });

  const content = css({
    fontFamily: "Geograph"
  });

  return (
    <Card css={card}>
      <CardMedia component="img" css={image} image={require('../../../../src/assets/product_images/' + product.image_location)} title={product.name} />
      <CardContent css={content}>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography gutterBottom component="h2">
          {product.brand}
        </Typography>
        <Typography gutterBottom component="h2">
          {product.price} SEK
            <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
              <AddShoppingCart />
            </IconButton>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;