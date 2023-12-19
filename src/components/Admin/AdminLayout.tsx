import React from "react";

const AdminLayout = (props: any) => {
  const { children, wrapperClassName, ...rest } = props;

  return (
    <div className={wrapperClassName} id="admin-layout">
      {children}
    </div>
  );
};

export default AdminLayout;
