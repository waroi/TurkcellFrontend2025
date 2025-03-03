import React from "react";
import { useRoutes } from "react-router"; // Make sure to use react-router-dom
import HomeView from "../../views/HomeView";
import CategoryView from "../../views/CategoryView";

const Routes = ({ news, setCategory, category }) => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView news={news} />,
    },
    {
      path: "/kategori/:categoryName", // Fix the path, remove duplicate "kategori/"
      element: (
        <CategoryView
          news={news}
          setCategory={setCategory}
          category={category}
        />
      ),
    },
  ]);

  return routes;
};

export default Routes;
