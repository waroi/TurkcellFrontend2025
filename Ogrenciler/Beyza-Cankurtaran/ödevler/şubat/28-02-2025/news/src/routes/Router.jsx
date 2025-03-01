import { useRoutes, Navigate } from "react-router";
import HomeView from "../views/HomeView";
import HaberView from "../views/HaberView";
import SportNewView from "../views/SportNewView";
import TechNewView from "../views/TechNewView";
import HealthNewView from "../views/HealthNewView";
import EconomyNewView from "../views/EconomyNewView";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/haberler/",
      element: <HaberView />,
      children: [
        { index: true, element: <HomeView /> },
        { path: "spor", element: <SportNewView /> },
        { path: "tech", element: <TechNewView /> },
        { path: "health", element: <HealthNewView /> },
        { path: "ekonomi", element: <EconomyNewView /> },
      ],
    },
  ]);
  return routes;
};

export default Router;
