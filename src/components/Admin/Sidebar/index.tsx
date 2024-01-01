import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

interface AdminSidebarProps {
  open?: boolean;
  toggleSidebar: () => void;
}

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const menus = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: DashboardIcon,
  },
  {
    title: "Orders",
    link: "/orders",
    icon: ShoppingCartIcon,
  },
  {
    title: "Customers",
    link: "/customers",
    icon: PeopleIcon,
  },
  {
    title: "Reports",
    link: "/reports",
    icon: BarChartIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
  {
    title: "Integrations",
    link: "/integrations",
    icon: LayersIcon,
  },
];

const AdminSidebar = (props: AdminSidebarProps) => {
  const { open, toggleSidebar } = props;

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleSidebar}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List className="" component="nav">
        {menus.map((menu: any, index: number) => (
          <ListItemButton href={`/admin${menu.link}`}>
            <ListItemIcon>
              <menu.icon />
            </ListItemIcon>
            <ListItemText primary={menu.title} />
          </ListItemButton>
        ))}
      </List>
      <List className="mt-auto" component="nav">
        <Divider sx={{ my: 1 }} />
        <ListItemButton>
          {/* <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon> */}
          <ListItemText primary="App" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default AdminSidebar;
