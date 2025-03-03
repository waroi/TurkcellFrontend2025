import React from "react";
import { useRoutes, Navigate } from "react-router";
import HomeView from "../../views/HomeView";
import CategoryView from "../../views/CategoryView";
import NewDetailView from "../../views/NewDetailView";

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
          children: [
            {
              path: ":id",
              element: <NewDetailView news={news} />,
            },
          ],
        },
      ],
    },
  ]);

  return routes;
};

export default Routes;
