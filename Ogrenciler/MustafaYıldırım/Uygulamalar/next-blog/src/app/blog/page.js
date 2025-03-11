"use client";
import { useEffect, useState } from "react";
import { getBlogs } from "../../api/Api";
import PostCard from "../../components/PostCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {blogs.map((blog) => (
          <PostCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
