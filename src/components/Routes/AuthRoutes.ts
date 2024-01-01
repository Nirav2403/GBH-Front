import React from "react";
import AdminLogin from "../Authentication/Login";
import AuthenticationLayout from "../Authentication/AuthLayout";
import AdminSignUp from "../Authentication/Signup";

const AuthRoutes = [
  {
    id: 1,
    title: "Login",
    path: "/auth/admin/login",
    component: AdminLogin,
    wrapperComponent: AuthenticationLayout,
    isAdmin: true,
    exact: true,
  },
  {
    id: 2,
    title: "Signup",
    path: "/auth/admin/signup",
    component: AdminSignUp,
    wrapperComponent: AuthenticationLayout,
    isAdmin: true,
    exact: true,
  },
];

export default AuthRoutes;
