import React from "react";

const BlogDetails = ({ blog }) => {
  console.log(blog);

  return (
    <div>
      <h1>{blog?.id}</h1>
      <h1>{blog?.title}</h1>
      <img src={blog?.image} />
      <div>{blog?.description}</div>
      <div>{blog?.author}</div>
      <div>{blog?.releaseDate}</div>
    </div>
  );
};

export default BlogDetails;
