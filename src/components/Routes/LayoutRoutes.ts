import Layout from "../Layout/Layout";
import Home from "../Layout/Home";

const LayoutRoutes = [
  {
    id: 1,
    title: "Home",
    path: "/",
    component: Home,
    wrapperComponent: Layout,
    isAdmin: true,
    exact: true,
  },
  {
    id: 1,
    title: "About",
    path: "/about",
    component: Home,
    wrapperComponent: Layout,
    isAdmin: true,
    exact: true,
  },
];

export default LayoutRoutes;
