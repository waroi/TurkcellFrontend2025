import { useRoutes } from "react-router";
import HomePage from "../pages/HomePage";

const Router = () => {
  const routes = useRoutes([{ path: "/", element: <HomePage /> }]);
  return routes;
};

export default Router;
