import React from "react";
import AdminLayout from "../Admin/AdminLayout";
import Dashboard from "../Admin/Dashboard";
import Order from "../Admin/Order";
import Customer from "../Admin/Customer";
import Report from "../Admin/Report";
import Integration from "../Admin/Integration";

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
    path: "/admin/order",
    component: Order,
    wrapperComponent: AdminLayout,
    isAdmin: true,
  },
  {
    id: 3,
    title: "Customer",
    path: "/admin/customer",
    component: Customer,
    wrapperComponent: AdminLayout,
    isAdmin: true,
  },
  {
    id: 4,
    title: "Report",
    path: "/admin/report",
    component: Report,
    wrapperComponent: AdminLayout,
    isAdmin: true,
  },
  {
    id: 5,
    title: "Integration",
    path: "/admin/integration",
    component: Integration,
    wrapperComponent: AdminLayout,
    isAdmin: true,
  },
];

export default AdminRoutes;
