"use client";
import React from "react";
import useBlogStore from "@/store/useBlogStore";

const BlogDetails = ({ params }) => {
  const { posts } = useBlogStore();

  console.log("params", params.id);
  const blog = posts.filter((post) => post.id.toString() == params.id);
  console.log(blog);

  return (
    <div className="container">
      <img src={blog[0].image} className="w-100 mb-4" />
      <div className="d-flex">
        <p className="badge bg-success px-4 py-2 me-3 rounded-pill">
          {blog[0].author}
        </p>
        <p className="badge bg-success px-4 py-2 rounded-pill">
          {blog[0].releaseDate}
        </p>
      </div>
      <h1>{blog[0].title}</h1>
      <div className="my-4 display-6 fs-5">{blog[0].content}</div>
    </div>
  );
};

export default BlogDetails;
