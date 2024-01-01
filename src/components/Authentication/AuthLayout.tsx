import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

const defaultTheme = createTheme();

const AuthenticationLayout = (props: any) => {
  const { children, wrapperClassName, ...rest } = props;

  return (
    <div className={wrapperClassName} id="admin-layout">
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </div>
  );
};

export default AuthenticationLayout;
