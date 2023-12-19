import NotFoundPage from "../NotFound/NotFoundPage";
import AdminRoutes from "./AdminRoutes";
import LayoutRoutes from "./LayoutRoutes";

const CommonRoutes = [
  {
    id: 1,
    title: "Not Found",
    path: "*",
    component: NotFoundPage,
    exact: true,
  },
];

export const routes = [...AdminRoutes, ...LayoutRoutes, ...CommonRoutes];
