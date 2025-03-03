import { useRoutes } from "react-router";
import UserView from "../views/UserView";
import HomeView from "../views/HomeView";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/user", element: <UserView /> },
    {
      path: "/haberler/",
      element: <NewViews />,
      children: [
        { index: true, element: <SporView /> },
        { path: "spor", element: <SporView /> },
        { path: "ekonomi", element: <EkonomiView /> },
      ],
    },
  ]);
  return routes;
};

export default Router;
