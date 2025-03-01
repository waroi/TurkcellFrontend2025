import { useRoutes } from "react-router";
import HomeView from "../views/HomeView";
import { UserView } from "../views/UserView";
import ParametreView from "../views/ParametreView";
import EconomyNewView from "../views/EconomyNewView";
import SportNewView from "../views/SportNewView";


const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/user", element: <UserView /> },
    { path: "/parametre/:id", element: <ParametreView /> },
    {path: "/haberler/", element:}
  ]);

  return routes;
};

export default Router;
