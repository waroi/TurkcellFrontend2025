import React from "react";
import { useRoutes } from "react-router";
import HomeView from "../views/HomeView";
const Router = () => {
  const routes = useRoutes([{ path: "/", element: <HomeView /> }]);
};

export default Router;
