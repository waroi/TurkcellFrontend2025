import { Navigate, useRoutes } from "react-router";
import userRouter from "./userRouter";
import HomeView from "../views/HomeView";
import ParameterView from "../views/ParameterView";
import NewsView from "../views/NewsView";
import SportNews from "../views/SportNews";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
    userRouter,
    { path: "/parameter/:id", element: <ParameterView /> },
    {
      path: "/haberler/",
      element: <NewsView />,
      children: [
        { index: true, element: <Navigate to="spor" /> },
        { path: "spor", element: <SportNews /> },
      ],
    },
  ]);

  return routes;
};

export default Router;
