import React from "react";
import { useRoutes } from "react-router"; // Make sure to use react-router-dom
import HomeView from "../../views/HomeView";
import CategoryView from "../../views/CategoryView";

const Routes = ({ news, handleCategory }) => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView news={news} />,
    },
    {
      path: ":categoryName",
      element: <CategoryView news={news} handleCategory={handleCategory} />,
    },
  ]);

  return routes;
};

export default Routes;
