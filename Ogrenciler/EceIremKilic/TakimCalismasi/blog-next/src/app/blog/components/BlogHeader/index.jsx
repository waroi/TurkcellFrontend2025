import React from "react";
import formatDate from "@/utils/FormatDate";

export const BlogHeader = ({ blog }) => (
  <>
    <img src={blog?.image} className="w-100 mb-4" alt={blog?.title} />
    <div className="d-flex">
      <p className="badge bg-success px-4 py-2 me-3 rounded-pill">
        {blog?.author}
      </p>
      <p className="badge bg-success px-4 py-2 rounded-pill">
        {formatDate(blog?.releaseDate)}
      </p>
    </div>
    <h1>{blog?.title}</h1>
  </>
);
