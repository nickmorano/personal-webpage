import { Container, Typography, Button, IconButton, Stack} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

import CartItem from './CartItem/CartItem';
import { Navbar } from '../../components';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart, <Link className="link" to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart) return 'Loading';

  const itemTotal = () => {
    return cart.reduce((acc, item) => item.price * item.quantity + acc, 0);
  }

  const lastItem = (lineItemId) => {
    return cart.at(-1).id === lineItemId;
  }

  const renderCart = () => (
    <div>
        {cart.map((lineItem) => (
            <CartItem key={lineItem.name} item={lineItem} lastItem={lastItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
        ))}
      {/* <div>
        <Button size="large" type="button" variant="outlined" color="secondary" onClick={handleEmptyCart} >Empty cart</Button>
      </div> */}
    </div>
  );

  return (
    <div>
      <Typography sx={{ textAlign: "center", fontSize: "12px", fontWeight: "200", py: "16px" }}>
        Free Shipping On Orders Over 900 SEK. Easy 60-Day Returns.
      </Typography>

      <IconButton component={Link} to="/" size="small" color="inherit" sx={{p: "0 0 8px 0"}}>
        <ArrowBack />
        <Typography sx={{ fontSize: "18px", fontWeight: "200" }}>Continue Shopping</Typography>
      </IconButton>

      <Container sx={{ border: 1, padding: "0 8px 8px 8px" }}>
        <Typography variant="h3" sx={{ borderBottom: 1, fontSize: "22px", fontWeight: "200", py: "20px" }} >Your Cart</Typography>
        { !cart.length ? renderEmptyCart() : renderCart() }
      </Container>

      <Container sx={{ border: 1, mt: "16px", padding: "0 8px 8px 8px" }}>
        <Typography variant="h3" sx={{ borderBottom: 1, fontSize: "22px", fontWeight: "200", py: "20px" }}>Order Summery</Typography>
        <Stack direction="row" justifyContent="space-between">
          <div>
            <Typography variant="h3" sx={{ fontSize: "22px", fontWeight: "200", pt: "12px" }}>Subtotal</Typography>
            <Typography variant="h3" sx={{ fontSize: "22px", fontWeight: "200", pt: "12px" }}>Shipping</Typography>
            <Typography variant="h3" sx={{ fontSize: "22px", fontWeight: "200", py: "12px" }}>Total</Typography>
          </div>
          <Stack alignItems="flex-end">
            <Typography variant="h3" sx={{ fontSize: "22px", fontWeight: "200", pt: "12px" }}>{itemTotal()} SEK</Typography>
            <Typography variant="h3" sx={{ fontSize: "22px", fontWeight: "200", pt: "12px" }}>49 SEK</Typography>
            <Typography variant="h3" sx={{ fontSize: "22px", fontWeight: "200", py: "12px" }}>{itemTotal() + 49} SEK</Typography>
          </Stack>
        </Stack>
        <Button className="checkoutButton" component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary" sx= {{mb: "10px"}} fullWidth>Checkout</Button>
      </Container>
    </div>
  );
};

export default Cart;