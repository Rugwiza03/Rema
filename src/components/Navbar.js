import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" className="navbar-title">
          REMA Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
