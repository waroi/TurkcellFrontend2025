import { useRoutes, Navigate } from "react-router";
import HomeView from "../views/HomeView";
import HaberView from "../views/HaberView";
import HealthNewsView from "../views/HealthNewsView";
import BusinessNewsView from "../views/BusinessNewsView";
import SportsView from "../views/SportsView";
import TechNewsView from "../views/TechNewsView";
import GeneralView from "../views/GeneralView";

const Router = () => {
    const routes = useRoutes([
        { path: "/", element: <HomeView /> },
        {
            path: "/news", 
            element: <HaberView />,
            children: [
                { index: true, element: <Navigate to='general' /> },
                {path: 'general', element: <GeneralView /> },
                { path: 'health', element: <HealthNewsView /> },
                { path: 'business', element: <BusinessNewsView /> },
                { path: 'sports', element: <SportsView /> },
                { path: 'tech', element: <TechNewsView /> },

            ],
        },
    ]);


    return routes;
}

export default Router;