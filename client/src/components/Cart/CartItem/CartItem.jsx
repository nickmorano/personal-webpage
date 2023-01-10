import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, Select, Stack, InputLabel, MenuItem } from '@mui/material';


const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart, lastItem }) => {

  const handleUpdateCartQty = (event, lineItemId) => onUpdateCartQty(lineItemId, event.target.value);
  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className="cart-item" elevation={0} square={true} sx={{borderBottom: lastItem(item.id) ? "" : "3px dotted gray", padding: "16px"}}>
      <Grid container >

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
            value={item.quantity}
            onChange={(e) => handleUpdateCartQty(e, item.id)}
            label="Quantity"
            >
            {[...Array(25).keys()].slice(1).map(x => <MenuItem key={x} value={x}>{x}</MenuItem>)}
          </Select>
        </Grid>

        <Grid item xs={3} textAlign="right" sx={{ justifyContent: "right" }}>
          <Stack alignItems="flex-end">
            <Typography variant="h7" sx={{fontSize: "16px"}} >{item.price} SEK</Typography>
            <Button
              sx={{m: 0, p: 0, textDecoration: "underline", fontSize: "14px"}}
              variant="text"
              color="secondary"
              onClick={() => handleRemoveFromCart(item.id)}>
                Remove
            </Button>
          </Stack>
        </Grid>

      </Grid>
    </Card>
  );
};

export default CartItem;