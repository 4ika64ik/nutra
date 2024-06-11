import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      className="drawerList"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'Product', 'About', 'Contact', 'Login'].map((text) => (
          <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`} className="drawerItem">
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="default" className="header">
      <Toolbar>
        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="title">
          <Link to="/" className="link">BBC</Link>
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit">
            <Link to="/product" className="link">Product</Link>
          </Button>
          <Button color="inherit">
            <Link to="/about" className="link">About</Link>
          </Button>
          <Button color="inherit">
            <Link to="/contact" className="link">Contact</Link>
          </Button>
          <Button color="inherit">
            <Link to="/login" className="link">Login</Link>
          </Button>
        </Box>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </AppBar>
  );
}

export default Header;
