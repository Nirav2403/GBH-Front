import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { routes } from ".";

const RoutePaths = () => {
  const renderRoutes = () => {
    return routes.map((route: any, index: number) =>
      route.wrapperComponent ? (
        <Route
          key={index}
          {...route}
          element={
            <route.wrapperComponent>
              <Outlet />
            </route.wrapperComponent>
          }
        >
          <Route {...route} element={<route.component />} />
        </Route>
      ) : (
        <Route key={index} {...route} />
      )
    );
  };

  return <Routes>{renderRoutes()}</Routes>;
};

export default RoutePaths;
