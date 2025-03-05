import { useRoutes } from "react-router";
import HomeView from "../views/HomeView";
import AuthView from "../views/AuthView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <AuthView /> },
    { path: "/app", element: <HomeView /> },
  ]);
  return routes;
};

export default Router;
