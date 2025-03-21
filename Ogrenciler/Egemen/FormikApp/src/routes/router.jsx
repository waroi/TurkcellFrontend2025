import { useRoutes } from "react-router";
import GeneralFormView from "../views/GeneralFormView";
import ApplicationsView from "../views/ApplicationsView";
import SignInView from "../views/SignInView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <SignInView /> },
    { path: "/form", element: <GeneralFormView /> },
    { path: "/applications", element: <ApplicationsView /> },
  ]);
  return routes;
};

export default Router;
