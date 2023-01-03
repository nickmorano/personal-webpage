import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid } from '@mui/material';


const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className="cart-item" elevation={0} square={true} fullWidth>
      <Grid container fullWidth>
        <Grid item xs={3}>
          <CardMedia component="img" image={require('../../../../src/assets/product_images/' + item.image_location)} title={item.name} />
        </Grid>
        <Grid item xs={3}>
          <CardContent className="cardContent">
            <Typography variant="h4">{item.name}</Typography>
            {/* <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography> */}
          </CardContent>
        </Grid>
        <Grid item xs={3}>
          <CardActions className="cardActions">
            <div className="buttons">
              <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
              <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
              <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
            </div>
          </CardActions>
        </Grid>
        <Grid item xs={3} sx={{ justifyContent: "center" }}>
          <Typography variant="h7" fullWidth>{item.price}</Typography>
          <Button variant="text" fullWidth type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartItem;