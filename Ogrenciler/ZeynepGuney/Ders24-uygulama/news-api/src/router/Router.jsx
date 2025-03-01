import { useRoutes, Navigate } from "react-router";
import Home from "../view/Home";
import GeneralView from "../view/GeneralView";
import EconomyView from "../view/EconomyView";
import WorldView from "../view/WorldView";
import HealthView from "../view/HealthView";
import MagazineView from "../view/MagazineView";
const Router = () => {
  const routes = useRoutes([
    {
      path: "/home",
      element: <Home />,
      children: [
        { index: true, element: <Navigate to="/genel" /> },
        { path: "genel", element: <GeneralView /> },
        { path: "ekonomi", element: <EconomyView /> },
        { path: "dunya", element: <WorldView /> },
        { path: "saglik", element: <HealthView /> },
        { path: "magazin", element: <MagazineView /> },
      ],
    },
  ]);
  return routes;
};

export default Router;
