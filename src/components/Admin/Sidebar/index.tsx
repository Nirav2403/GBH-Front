import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import GridViewIcon from "@mui/icons-material/GridView";
import { Box, Paper, Typography } from "@mui/material";
import {
  Dns,
  KeyboardArrowDown,
  People,
  PermMedia,
  Public,
} from "@mui/icons-material";

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
    title: "Analytics",
    link: "/analytic",
    icon: AnalyticsIcon,
  },
  {
    title: "Orders",
    link: "/order",
    icon: ShoppingCartIcon,
  },
  {
    title: "Customers",
    link: "/customer",
    icon: PeopleIcon,
  },
  {
    title: "Report",
    link: "/report",
    icon: BarChartIcon,
  },
  {
    title: "Integration",
    link: "/integration",
    icon: LayersIcon,
  },
  {
    title: "Customization",
    link: "/customize",
    icon: GridViewIcon,
    submenu: [
      {
        title: "Theme",
        link: "/integration",
        icon: People,
      },
      {
        title: "Database",
        link: "/integration",
        icon: Dns,
      },
    ],
  },
  {
    title: "Network & Connection",
    link: "/network",
    icon: People,
    submenu: [
      {
        title: "Authentication",
        link: "/integration",
        icon: People,
      },
      {
        title: "Database",
        link: "/integration",
        icon: Dns,
      },
      {
        title: "Storage",
        link: "/integration",
        icon: PermMedia,
      },
      {
        title: "Hosting",
        link: "/integration",
        icon: Public,
      },
    ],
  },
];

const AdminSidebar = (props: AdminSidebarProps) => {
  const { open, toggleSidebar } = props;

  const [menuIsOpen, setMenuIsOpen] = useState(0);

  return (
    <Drawer variant="permanent" open={open} className="z-[1300]">
      {open && (
        <Box className="bg-gray-200 text-center" paddingBlock={3}>
          <Paper elevation={3} className="inline-block">
            <img
              src="https://www.rsquare2014.com/wp-content/uploads/2017/02/External-Events-banner_2.png"
              width={200}
              height={100}
              className="block"
            />
          </Paper>
          <Typography variant="h6" className="px-5 mt-3">
            Event
          </Typography>
        </Box>
      )}
      <IconButton
        className="fixed bg-white-1000 p-0"
        style={{ left: `${drawerWidth - 20}px`, top: "20px" }}
        onClick={toggleSidebar}
      >
        <ChevronLeftIcon />
      </IconButton>

      <Box sx={{ overflowX: "hidden", marginTop: open ? 3 : 0 }}>
        <List className="" component="nav" classes={"h-full overflow-scroll"}>
          {menus.map((menu: any, index: number) =>
            menu.submenu ? (
              <>
                <ListItemButton
                  onClick={() =>
                    setMenuIsOpen((prevState) =>
                      prevState === index ? -1 : index
                    )
                  }
                >
                  <ListItemIcon>
                    <menu.icon />
                  </ListItemIcon>
                  <ListItemText primary={menu.title} />
                  <KeyboardArrowDown
                    sx={{
                      transform:
                        menuIsOpen === index ? "rotate(-180deg)" : "rotate(0)",
                      transition: "0.2s",
                    }}
                  />
                </ListItemButton>
                {menuIsOpen === index &&
                  menu.submenu.map((submenu: any) => (
                    <ListItemButton href={`/admin${menu.link}${submenu.link}`}>
                      {/* <ListItemIcon>
                        <submenu.icon />
                      </ListItemIcon> */}
                      <ListItemText primary={submenu.title} />
                    </ListItemButton>
                  ))}
              </>
            ) : (
              <ListItemButton href={`/admin${menu.link}`}>
                <ListItemIcon>
                  <menu.icon />
                </ListItemIcon>
                <ListItemText primary={menu.title} />
              </ListItemButton>
            )
          )}
        </List>
      </Box>
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
