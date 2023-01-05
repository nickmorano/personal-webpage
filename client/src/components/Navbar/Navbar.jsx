/** @jsxImportSource @emotion/react */
import { AppBar, Stack } from '@mui/material';
import { useLocation } from "react-router-dom"

import TopNav from './TopNav'
import SubNav from './SubNav'
import { useEffect, useState } from 'react';

const Navbar = ({ totalItems }) => {
  const [fullNavView, setFullNavView] = useState(true)
  const location = useLocation();

  useEffect(() => {
    if(location.pathname == "/cart") {
      setFullNavView(false)
    } else {
      setFullNavView(true)
    }
  });

  return (
    <AppBar position='relative' color='inherit' elevation={0}>
      <Stack>
        <TopNav totalItems={totalItems} fullView={fullNavView} />
        { fullNavView ? <SubNav /> : null }
      </Stack>
    </AppBar>
  );
}

export default Navbar;