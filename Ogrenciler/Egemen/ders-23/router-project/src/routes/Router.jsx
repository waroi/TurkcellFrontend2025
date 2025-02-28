import { useRoutes } from "react-router";
import HomeView from "../views/HomeView";
import { UserView } from "../views/UserView";

const Router = () => {
  const routes = useRoutes([{ path: "/", element: <HomeView /> }, {path:"/user", element: <UserView/>}]);

  return routes;
};

export default Router;
