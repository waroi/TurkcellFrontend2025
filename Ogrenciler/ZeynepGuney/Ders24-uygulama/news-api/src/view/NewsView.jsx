import React from "react";
import Categories from "../components/Categories/Categories";
import { Outlet } from "react-router";
const NewsView = () => {
  return (
    <>
      <div className="mt-5 pt-3 container">
        <h2>Popüler Konular</h2>
        <Categories />
        <Outlet />
      </div>
    </>
  );
};

export default NewsView;
