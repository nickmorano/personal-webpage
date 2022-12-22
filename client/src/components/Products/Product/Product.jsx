/** @jsxImportSource @emotion/react */
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { css } from '@emotion/react';

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);

  const description = css({
  })

  return (
    <Card className="root">
      <CardMedia className="media" style={{height: 0, paddingTop: '75%'}} image={require('../../../../src/assets/product_images/' + product.image_location)} title={product.name} />
      <CardContent>
        <div className="cardContent">
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" css={description}>
            ${product.price}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" component="p" />
      </CardContent>
      <CardActions disableSpacing className="cardActions">
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>

    </Card>
  );
};

export default Product;