import { useRoutes, Navigate } from "react-router";
import HomeView from "../views/HomeView";
import HaberView from "../views/HaberView";
import HaberDetails from "../views/HaberDetails";
import { Children } from "react";

const Router = () => {
    const routes = useRoutes([
        { path: "/", element: <HomeView /> },
        {
            path: "/haberler", element: <HaberView />, Children: [
                { index: true, element: <Navigate to={"/haberler"} /> },
                { path: ":newsId", element: <HaberDetails /> },
            ],
        },
    ]);


    return routes;
}

export default Router;