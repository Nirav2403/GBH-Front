import React from "react";
import AdminLayout from "../Admin/AdminLayout";
import Dashboard from "../Admin/Dashboard";

const AdminRoutes = [
  {
    id: 1,
    title: "Admin",
    path: "/admin/dashboard",
    component: Dashboard,
    wrapperComponent: AdminLayout,
    isAdmin: true,
    exact: true,
  },
  {
    id: 2,
    title: "Order",
    path: "/admin/orders",
    component: Dashboard,
    wrapperComponent: AdminLayout,
    isAdmin: true,
  },
  {
    id: 3,
    title: "Admin",
    path: "/admin/dashboard",
    component: Dashboard,
    wrapperComponent: AdminLayout,
    isAdmin: true,
  },
  {
    id: 1,
    title: "Admin",
    path: "/admin/dashboard",
    component: Dashboard,
    wrapperComponent: AdminLayout,
    isAdmin: true,
  },
  {
    id: 1,
    title: "Admin",
    path: "/admin/dashboard",
    component: Dashboard,
    wrapperComponent: AdminLayout,
    isAdmin: true,
  },
  {
    id: 1,
    title: "Admin",
    path: "/admin/dashboard",
    component: Dashboard,
    wrapperComponent: AdminLayout,
    isAdmin: true,
  },
];

export default AdminRoutes;
