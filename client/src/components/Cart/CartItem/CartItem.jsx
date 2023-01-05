import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, Select, Stack, InputLabel, MenuItem } from '@mui/material';


const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  const availableQuantitiesArray = (max = 30) => {
    let quantityArray = [];
    for(let i = 1; i <= max; i++) {
      quantityArray.push(i)
    }
    return [1, 2];
  }

  return (
    <Card className="cart-item" elevation={0} square={true} fullWidth>
      <Grid container fullWidth>

        <Grid item xs={3}>
          <CardMedia component="img" image={require('../../../../src/assets/product_images/' + item.image_location)} title={item.name} />
        </Grid>

        <Grid item xs={3}>
          <Stack>
            <Typography variant="h7" sx={{ px: 1, fontWeight: 600 }}>{item.name}</Typography>
            <Typography variant="h7" sx={{ px: 1, fontWeight: 200 }}>{item.brand}</Typography>
          </Stack>
        </Grid>

        <Grid item textAlign="center" xs={3}>
          <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={item.quantity}
            label="Age"
          >
            {[...Array(50).keys()].map(x => <MenuItem value={x}>{x}</MenuItem>)}
          </Select>
        </Grid>

        <Grid item xs={3} textAlign="right" sx={{ justifyContent: "right" }}>
          <Stack textAlign="right" sx={{ justifyContent: "right" }}>
            <Typography variant="h7" sx={{fontSize: "16px"}} >{item.price} SEK</Typography>
            <Button sx={{m: 0, p: 0, textDecoration: "underline", fontSize: "14px"}} variant="text" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
          </Stack>
        </Grid>

      </Grid>
    </Card>
  );
};

export default CartItem;