import { useRoutes } from "react-router";
import UserView from "../views/UserView";
import HomeView from "../views/HomeView";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/user", element: <UserView /> },
  ]);
  return routes;
};

export default Router;
