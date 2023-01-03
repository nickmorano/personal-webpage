/** @jsxImportSource @emotion/react */
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { css } from '@emotion/react';

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card elevation={0} square={true}>
      <CardMedia component="img" image={require('../../../../src/assets/product_images/' + product.image_location)} title={product.name} />
      <CardContent sx={{ pl: 0 }}>
        <Typography gutterBottom variant="h4" component="h2">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {product.brand}
        </Typography>
        <Typography gutterBottom variant="h6" onClick={handleAddToCart}>
          {product.price} SEK
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;