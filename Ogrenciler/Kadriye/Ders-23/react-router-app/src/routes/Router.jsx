import { useRoutes } from "react-router";
import HomeView from "../views/HomeView";
import UserView from "../views/UserView";
import userRouter from "./UserRouter";
import ParameterView from "../views/ParameterView";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    userRouter,
    { path: "/parameter/:id", element: <ParameterView /> },
    // { path: "/user", element: <UserView /> }
  ]);
  return routes;
};
export default Router;
