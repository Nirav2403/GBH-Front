import React from "react";
import Header from "./Header";

const Layout = (props: any) => {
  const { children, wrapperClassName, ...rest } = props;

  return (
    <div className={wrapperClassName} id="layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
