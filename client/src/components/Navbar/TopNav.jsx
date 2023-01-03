/** @jsxImportSource @emotion/react */
import { AppBar, Toolbar, Badge, MenuItem, Menu, Typography, IconButton, Stack, Button } from '@mui/material';
import { BorderBottom, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

import logo from '../../assets/rare-logo.png'

const TopNav = ({ totalItems }) => {

  const topNav = css({
    justifyContent: "space-between",
    borderBottom: "solid 1px"
  })

  return (
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
  );
}

export default TopNav;