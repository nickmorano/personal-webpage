/** @jsxImportSource @emotion/react */
import { AppBar, Toolbar, Badge, MenuItem, Menu, Typography, IconButton, Stack, Button } from '@mui/material';
import { BorderBottom, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

import TopNav from './TopNav'
import SubNav from './SubNav'
import logo from '../../assets/rare-logo.png'

const Navbar = ({ totalItems }) => {

  const subNav = css({
    justifyContent: "space-between",
  })

  return (
    <AppBar color='inherit' position='sticky'>
        <Stack>
          <TopNav totalItems={totalItems} />
          <SubNav />
        </Stack>
    </AppBar>
  );
}

export default Navbar;