import { useRoutes } from "react-router";
import HomeView from "../views/HomeView";
import SssView from "../views/SssView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    {path: "/sss", element: <SssView /> },
  ]);
  return routes;
};

export default Router;