import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Avatar, Box, Button, Popover } from "@mui/material";
import { SupervisedUserCircleOutlined } from "@mui/icons-material";

interface AdminHeaderProps extends MuiAppBarProps {
  open?: boolean;
  toggleSidebar: () => void;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth: number = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AdminHeader = (props: AdminHeaderProps) => {
  const { open, toggleSidebar } = props;

  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState();

  const toggleProfileMenu = (e: any) => {
    setIsOpenProfileMenu(e?.currentTarget);
  };

  return (
    <AppBar
      position="absolute"
      open={open}
      className="bg-white-1000 text-black-1000"
    >
      <Toolbar
        sx={{
          pr: "24px",
        }}
      >
        <IconButton
          edge="start"
          aria-label="open drawer"
          // onClick={toggleSidebar}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Box>
          <Button className="gap-2" onClick={toggleProfileMenu}>
            <Avatar alt="Basic">
              <SupervisedUserCircleOutlined />
            </Avatar>
            <Typography color="black">Nirav Prajapati</Typography>
          </Button>
          <Popover
            id={isOpenProfileMenu && "simple-popover"}
            open={!!isOpenProfileMenu}
            anchorEl={isOpenProfileMenu}
            onClose={() => toggleProfileMenu(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
          </Popover>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
