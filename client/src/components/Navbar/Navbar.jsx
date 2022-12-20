import { AppBar, Toolbar, Badge, MenuItem, Menu, Typography, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import logo from '../../assets/commerce.png'

const Navbar = ({ totalItems }) => {
  return (
    <div className="navbar">
      <AppBar position="fixed" className="appBar" color='inherit'>
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className="title" color="inherit">
            <img src={logo} alt="nav" height="25px" className="image" />
            Commerce.js
          </Typography>
          <div className="grow"></div>
          <div className="button">
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;