import { useRoutes } from "react-router";
import userRouter from "./userRouter";
import HomeView from "../views/HomeView";
import ParametreView from "../views/Parametreview";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    userRouter,
    { path: "/parametre/:id", element: <ParametreView /> },
  ]);
  return routes;
};

export default Router;
