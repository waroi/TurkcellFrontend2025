import { Navigate, useRoutes } from "react-router";
import HomeView from "../views/HomeView";
import UserView from "../views/UserView";
import userRouter from "./UserRouter";
import ParameterView from "../views/ParameterView";
import NewView from "../views/NewView";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    userRouter,
    { path: "/parameter/:id", element: <ParameterView /> },
    {
      path: "/haberler/",
      element: <NewView />,
      children: [{ index: true, element: <Navigate to="Spor" /> }],
    },
    // { path: "/user", element: <UserView /> }
  ]);
  return routes;
};
export default Router;
