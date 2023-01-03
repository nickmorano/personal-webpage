import { AppBar, Toolbar, Container, Box, Badge, Typography, Button, IconButton, Grid } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

import CartItem from './CartItem/CartItem';
import { Navbar } from '../../components';

import logo from '../../assets/rare-logo.png'

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const handleEmptyCart = () => onEmptyCart();

  console.log(cart)

  const handleDrawerToggle = () => {
    console.log("hello")
  }

  const topNav = css({
    borderBottom: "solid 1px",
    marginLeft: "auto",
    marginRight: "auto"
  })


  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className="link" to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart) return 'Loading';

  const renderCart = () => (
    <div>
      {/* <Grid container spacing={3}> */}
        {cart.map((lineItem) => (
          // <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          // </Grid>
        ))}
      {/* </Grid> */}
      <div className="cardDetails">
        {/* <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography> */}
        <div>
          <Button className="emptyButton" size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} sx= {{mb: "10px"}} fullWidth>Empty cart</Button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <AppBar color='inherit' position='sticky'>
        <Toolbar css={topNav}>
          <Typography component={Link} to="/" variant="h6" className="title" color="inherit" margin="auto">
            <img src={logo} alt="nav" height="100px" className="image" />
          </Typography>
        </Toolbar>
      </AppBar>
      <IconButton component={Link} to="/" size="small" color="inherit" >
        <ArrowBack />
        <Typography sx={{ fontSize: "18px", fontWeight: "200", py: "20px" }}>Continue Shopping</Typography>
      </IconButton>

      <Container sx={{ border: 1 }}>
        <Typography variant="h3" sx={{ borderBottom: 1, fontSize: "22px", fontWeight: "200", py: "20px", mb: "10px" }} >Your Cart</Typography>
        { !cart.length ? renderEmptyCart() : renderCart() }
      </Container>

      <Container sx={{ border: 1, mt: "20px" }}>
        <Typography variant="h3" sx={{ borderBottom: 1, fontSize: "22px", fontWeight: "200", py: "20px" }}>Order Summery</Typography>
        <Typography variant="h3" sx={{ fontSize: "22px", fontWeight: "200", pt: "10px" }}>Subtotal</Typography>
        <Typography variant="h3" sx={{ fontSize: "22px", fontWeight: "200", pt: "10px" }}>Shipping</Typography>
        <Typography variant="h3" sx={{ fontSize: "22px", fontWeight: "200", py: "10px" }}>Total</Typography>
        <Button className="checkoutButton" component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary" sx= {{mb: "10px"}} fullWidth>Checkout</Button>
      </Container>
    </div>
  );
};

export default Cart;