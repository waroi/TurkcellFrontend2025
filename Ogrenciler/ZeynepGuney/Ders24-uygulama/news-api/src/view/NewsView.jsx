import React from "react";
import Categories from "../components/Categories/Categories";
import { Outlet } from "react-router";
const NewsView = () => {
  return (
    <>
      <div className="mt-5">NewsView</div>
      <Categories />
      <Outlet />
    </>
  );
};

export default NewsView;
