import { useRoutes, Navigate } from "react-router";
import Home from "../views/Home";
import CategoryView from "../views/CategoryView";

const Router = () => {
  const routes = useRoutes([
    {
      path: "home",
      element: <Home />,
      children: [
        { index: true, element: <CategoryView category="general" /> },
        { path: ":categoryName", element: <CategoryView /> },
      ],
    },
    { path: "/", element: <Navigate to="home" /> },
  ]);
  return routes;
};

export default Router;
