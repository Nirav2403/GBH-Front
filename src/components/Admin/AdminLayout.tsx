import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AdminHeader from "./Header";
import AdminSidebar from "./Sidebar";

const defaultTheme = createTheme();

const AdminLayout = (props: any) => {
  const { children, wrapperClassName, ...rest } = props;

  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className={wrapperClassName} id="admin-layout">
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AdminHeader open={open} toggleSidebar={toggleSidebar} />
          <AdminSidebar open={open} toggleSidebar={toggleSidebar} />
          {children}
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default AdminLayout;
