import React from "react";
import Admin from "../Admin/Admin";
import AdminLayout from "../Admin/AdminLayout";

const AdminRoutes = [
  {
    id: 1,
    title: "Admin",
    path: "/dashboard",
    component: Admin,
    wrapperComponent: AdminLayout,
    isAdmin: true,
    exact: true,
  },
];

export default AdminRoutes;
