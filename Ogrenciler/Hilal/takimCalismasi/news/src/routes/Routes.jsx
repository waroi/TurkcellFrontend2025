import React from "react";
import { useRoutes, Navigate } from "react-router";
import HomeView from "../../views/HomeView";

const Routes = () => {
  const routes = useRoutes([
    {path:"/",element:<HomeView/>,
      children:[
        
    ]}
  ]);
  return routes;
};

export default Routes;
