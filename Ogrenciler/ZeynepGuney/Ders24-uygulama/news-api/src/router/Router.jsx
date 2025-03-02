import { useRoutes, Navigate } from "react-router";
import Home from "../view/Home";
import GeneralView from "../view/GeneralView";
import EconomyView from "../view/EconomyView";
import WorldView from "../view/WorldView";
import HealthView from "../view/HealthView";
import MagazineView from "../view/MagazineView";
import SportView from "../view/SportView";
import NewsView from "../view/NewsView";
const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/haberler/",
      element: <NewsView />,
      children: [
        { index: true, element: <Navigate to="genel" /> },
        { path: "genel", element: <GeneralView /> },
        { path: "ekonomi", element: <EconomyView /> },
        { path: "spor", element: <SportView /> },
        { path: "dunya", element: <WorldView /> },
        { path: "saglik", element: <HealthView /> },
        { path: "magazin", element: <MagazineView /> },
      ],
    },
  ]);
  return routes;
};

export default Router;
