import { useRoutes } from "react-router";
import HomeView from "../views/HomeView";
import SssView from "../views/SssView";
import ContactView from "../views/ContactView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/sss", element: <SssView /> },
    { path: "/contact-us", element: <ContactView /> },
  ]);
  return routes;
};

export default Router;
