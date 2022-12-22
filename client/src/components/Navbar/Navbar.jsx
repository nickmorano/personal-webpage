/** @jsxImportSource @emotion/react */
import { AppBar, Toolbar, Badge, MenuItem, Menu, Typography, IconButton, Stack, Button } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';


import logo from '../../assets/rare-logo.png'

const Navbar = ({ totalItems }) => {

  const topNav = css({
    justifyContent: "space-between"
  })

  const subNav = css({
    justifyContent: "space-between"
  })

  return (
    <div className="navbar">
      <AppBar position="fixed" color='inherit'>
          <Stack>
            <Toolbar css={topNav}>
              <div className='placeholder'/>
              <Typography component={Link} to="/" variant="h6" className="title" color="inherit">
                <img src={logo} alt="nav" height="100px" className="image" />
              </Typography>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit" >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
            </Toolbar>
            <Toolbar css={subNav}>
              <Button>New</Button>
              <Button>Home</Button>
              <Button>Kitchen</Button>
              <Button>Bar</Button>
              <Button>Outdoor</Button>
              <Button>Clothing</Button>
              <Button>Accessories</Button>
            </Toolbar>
          </Stack>
      </AppBar>
    </div>
  );
}

export default Navbar;