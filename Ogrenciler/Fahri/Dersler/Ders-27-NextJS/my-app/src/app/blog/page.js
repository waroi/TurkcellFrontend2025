"use client";

import React from "react";
import useBlogState from "../store/useBlogState";

const Main = () => {
  const { addBlog, removeBlog, updateBlog } = useBlogState((state) => state);
  const { blogs } = useBlogState((state) => state);
  updateBlog(1, {});
  // removeBlog(1);
  console.log(blogs);
  return (
    <>
      <div className="container">deneme</div>
    </>
  );
};

export default Main;
