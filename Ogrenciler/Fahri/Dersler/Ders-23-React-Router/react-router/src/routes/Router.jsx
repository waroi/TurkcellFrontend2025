import { useRoutes } from "react-router";
import userRouter from "../routes/userRouter";
import HomeView from "../../views/HomeView";
import ParametreView from "../../views/ParametreView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    userRouter,
    { path: "/parametre/:id", element: <ParametreView /> },
  ]);
  return routes;
};
export default Router;
