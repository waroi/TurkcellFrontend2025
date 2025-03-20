import React from "react";
import { useRoutes } from "react-router";
import GeneralForm from "../components/GeneralForm";
import Applications from "../components/Applications";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <GeneralForm /> },
    { path: "/applications", element: <Applications /> },
  ]);
  return routes;
};

export default Router;
