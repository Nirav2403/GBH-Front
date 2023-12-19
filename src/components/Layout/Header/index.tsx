import React from "react";
import { AppBar, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpenProfile, setIsOpenProfile] = React.useState(null);

  const handleMenuClick = (event: any) => {
    setIsOpenProfile(event.currentTarget);
  };

  const handleMenuClose = () => {
    setIsOpenProfile(null);
  };

  return (
    <AppBar position="static" className="fade-down">
      <Toolbar>
        <Typography variant="h6">Marketing</Typography>
      </Toolbar>
      <Button component={Link} to="/about" color="inherit">
        About
      </Button>
      <Button component={Link} to="/contact" color="inherit">
        Contact
      </Button>
      <Button color="inherit" onClick={handleMenuClick}>
        Profile
      </Button>
      <Menu
        anchorEl={isOpenProfile}
        open={Boolean(isOpenProfile)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
