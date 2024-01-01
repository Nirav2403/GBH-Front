import React from "react";
import { AppBar, Avatar, Box, Menu, MenuItem } from "@material-ui/core";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
  const [isOpenProfile, setIsOpenProfile] = React.useState(null);

  const handleMenuClick = (event: any) => {
    setIsOpenProfile(event.currentTarget);
  };

  const handleMenuClose = () => {
    setIsOpenProfile(null);
  };

  return (
    <AppBar position="sticky" color="secondary" className="bg-white-1000">
      <Stack
        direction="row"
        spacing={2}
        justifyContent="between"
        width={100}
        className="w-full"
      >
        <Toolbar sx={{ flexGrow: 1 }}>
          <Typography variant="h6">Empire Business Hub</Typography>
        </Toolbar>

        <Stack direction="row" sx={{ flexGrow: 1 }}>
          <Button component={Link} to="/about" color="inherit">
            About
          </Button>
          <Button component={Link} to="/contact" color="inherit">
            Contact
          </Button>
        </Stack>

        <Button
          id="basic-button"
          aria-controls={isOpenProfile ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isOpenProfile ? "true" : undefined}
          onClick={handleMenuClick}
        >
          <Avatar />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={isOpenProfile}
          open={!!isOpenProfile}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          style={{ top: "48px" }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Stack>
    </AppBar>
  );
};

export default Header;
