import React from "react";
import { useRoutes, Navigate } from "react-router"; // Make sure to use react-router-dom
import HomeView from "../../views/HomeView";
import CategoryView from "../../views/CategoryView";

const Routes = ({ news, handleCategory }) => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView news={news} />,
      children: [
        { index: true, element: <Navigate to="general" /> },
        {
          path: ":categoryName",
          element: <CategoryView news={news} handleCategory={handleCategory} />,
        },
      ],
    },
  ]);

  return routes;
};

export default Routes;
