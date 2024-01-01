import React from "react";
import cx from "classnames";
import Header from "./Header";
import { Container } from "@mui/material";

const Layout = (props: any) => {
  const { children, wrapperClassName, ...rest } = props;

  return (
    <Container
      maxWidth={false}
      className={cx(
        "h-screen w-screen p-0 bg-sky-200 overflow-scroll",
        wrapperClassName
      )}
      id="layout"
    >
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
