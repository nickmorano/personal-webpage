/** @jsxImportSource @emotion/react */
import { Toolbar, Badge, Typography, IconButton, Grid } from '@mui/material';
import { ShoppingCartOutlined, Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

import logo from '../../assets/rare-logo.png'

const TopNav = ({ totalItems, fullView }) => {

  const displayIcons = fullView ? "visible" : "hidden"

  const icons = css({
    visibility: displayIcons
  })

  const topNav = css({
    borderBottom: "solid 1px"
  })

  return (
    <Toolbar css={topNav} sx={{ px: 2 }}>
      <Grid container alignItems="center">
        <Grid item textAlign="left" xs={2}>
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit" css={icons}>
            <Menu />
          </IconButton>
        </Grid>
        <Grid item textAlign="center" xs={8}>
          <Typography component={Link} to="/" variant="h6" className="title" color="inherit">
            <img src={logo} alt="nav" height="100px" className="image" />
          </Typography>
        </Grid>
        <Grid item textAlign="right" xs={2}>
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit" css={icons}>
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default TopNav;