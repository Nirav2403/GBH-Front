import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AdminHeader from "./Header";
import AdminSidebar from "./Sidebar";
import { Container, Box } from "@mui/material";
import cx from "classnames";

const defaultTheme = createTheme();

const AdminLayout = (props: any) => {
  const { children, wrapperClassName, ...rest } = props;

  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        maxWidth={false}
        className={cx(
          "admin-layout h-screen w-screen p-0 overflow-hidden bg-gray-100",
          wrapperClassName
        )}
        id="admin-layout"
      >
        <Box sx={{ display: "flex", height: "100%" }}>
          <CssBaseline />
          <AdminHeader open={open} toggleSidebar={toggleSidebar} />
          <AdminSidebar open={open} toggleSidebar={toggleSidebar} />
          <Container
            className="h-[95%] mh-content mt-20 bg-transparent"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
            }}
          >
            {children}
          </Container>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AdminLayout;
