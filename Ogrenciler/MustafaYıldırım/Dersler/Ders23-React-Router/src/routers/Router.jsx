import { useRoutes, Navigate } from "react-router";
import HomeView from "../views/HomeView";
import ParametreView from "../views/ParametreView";
import userRouter from "./UserRouter";
import NewView from "../views/NewView";
import EconomyNewView from "../views/EconomyNewView";
import SportsNewView from "../views/SportsNewView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    userRouter,
    { path: "/parametre/:id", element: <ParametreView /> },
    {
      path: "/haberler/",
      element: <NewView />,
      children: [
        { index: true, element: <Navigate to="sports" /> },
        { path: "economy", element: <EconomyNewView /> },
        { path: "sports", element: <SportsNewView /> },
      ],
    },
  ]);
  return routes;
};

export default Router;
