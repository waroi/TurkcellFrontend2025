import React from "react";
import BlogCard from "../../molecules/BlogCard";

const BlogGrid = () => {
  return (
    <div className="row">
      {[...Array(6)].map((_, i) => (
        <BlogCard key={i} />
      ))}
    </div>
  );
};

export default BlogGrid;
