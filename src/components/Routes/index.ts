import NotFoundPage from "../common/NotFound/NotFoundPage";
import AdminRoutes from "./AdminRoutes";
import AuthRoutes from "./AuthRoutes";
import LayoutRoutes from "./LayoutRoutes";

const CommonRoutes = [
  {
    id: 1,
    title: "Not Found",
    path: "**",
    component: NotFoundPage,
  },
];

export const routes = [
  ...CommonRoutes,
  ...AdminRoutes,
  ...AuthRoutes,
  ...LayoutRoutes,
];
