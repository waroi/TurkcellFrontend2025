import { Navigate, useRoutes } from "react-router";
import HomeView from "../views/HomeView";
import CategoryView from "../views/CategoryView";
import NewsView from "../views/NewsView";
import NewsDetailView from "../views/NewsDetailView";
import Layout from "../components/Layout/Layout";
const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomeView /> },
        {
          path: "news",
          element: <NewsView />,
          children: [
            { index: true, element: <Navigate to={"/"} /> },
            { path: "category/:categoryName", element: <CategoryView /> },
            { path: "category/:categoryName/:newsId", element: <NewsDetailView /> },
            { path: ":newsId", element: <NewsDetailView /> },
          ],
        },
      ],
    },
  ]);
  return routes;
};

export default Router;