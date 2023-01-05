/** @jsxImportSource @emotion/react */
import { AppBar, Toolbar, Badge, MenuItem, Menu, Typography, IconButton, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

const SubNav = () => {

  const subNav = css({
    justifyContent: "space-between",
    borderBottom: "solid 1px"
  })

  return (
    <Toolbar css={subNav} variant="dense">
      <Button>New</Button>
      <Button>Home</Button>
      <Button>Outdoor</Button>
      <Button>Clothing</Button>
  </Toolbar>
  );
}

export default SubNav;