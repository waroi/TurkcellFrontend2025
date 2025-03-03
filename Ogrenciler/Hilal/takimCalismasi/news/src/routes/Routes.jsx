import React from "react";
import { useRoutes, Navigate } from "react-router";
import HomeView from "../../views/HomeView";
import LanguageView from "../../views/LanguageView";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
      children: [
        { index: true, element: <Navigate to="tr" /> },
        { path: ":lang", element: <LanguageView /> },
      ],
    },
  ]);
  return routes;
};

export default Routes;
