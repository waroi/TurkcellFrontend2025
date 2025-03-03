import {useRoutes, Navigate} from "react-router";
import HomeNewsView from "../views/HomeNewsView";
import EconomyNewsView from "../views/EconomyNewsView";
import SportsNewsView from "../views/SportsNewsView";
import TechnologyNewsView from "../views/TechnologyNewsView";
import MagazineNewsView from "../views/MagazineNewsView";
import WorldNewsView from "../views/WorldNewsView";
import HealthNewsView from "../views/HealthNewsView";
import EntertainmentNewsView from "../views/EntertainmentNewsView";
import PopNews from "../views/PopNews";

import NewsView from "../views/NewsView";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Router = () => {
  const routes = useRoutes([
    {path: "/Navbar", element: <Navbar />},
    {path: "/Footer", element: <Footer />},
    {path: "/", element: <HomeNewsView />},
    {
      path: "/haberler/",
      element: <NewsView />,
      children: [
        {index: true, element: <Navigate to="genel" />},
        {path: "genel", element: <HomeNewsView />},
        {path: "populer", element: <PopNews />},
        {path: "spor", element: <SportsNewsView />},
        {path: "ekonomi", element: <EconomyNewsView />},
        {path: "teknoloji", element: <TechnologyNewsView />},
        {path: "magazin", element: <MagazineNewsView />},
        {path: "global", element: <WorldNewsView />},
        {path: "saglik", element: <HealthNewsView />},
        {path: "eglence", element: <EntertainmentNewsView />},
      ],
    },
  ]);
  return routes;
};

export default Router;
