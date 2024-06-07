import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" className="sidebar">
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/project">
          <ListItemText primary="Project" />
        </ListItem>
        <ListItem button component={Link} to="/site-management">
          <ListItemText primary="Site Management" />
        </ListItem>
        <ListItem button component={Link} to="/task-management">
          <ListItemText primary="Task Management" />
        </ListItem>
        <ListItem button component={Link} to="/reporting">
          <ListItemText primary="Reporting" />
        </ListItem>
        <ListItem button component={Link} to="/community">
          <ListItemText primary="Community" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
