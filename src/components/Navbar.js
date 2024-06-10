import React from 'react';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import '../styles/Navbar.css';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Typography variant="h6" className="navbar-title">
            REMA
          </Typography>
          <Typography variant="subtitle1" className="navbar-subtitle">
            Afforestation
          </Typography>
          <Button onClick={handleDrawerOpen} className="navbar-button">
            Menu
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <div className="drawer-container">
          <List>
            <ListItemButton>
              <ListItemText primary="Analytics" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Project" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Site Management" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Task Management" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Reporting" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Community" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Settings" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="User Manual" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Others" />
            </ListItemButton>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;