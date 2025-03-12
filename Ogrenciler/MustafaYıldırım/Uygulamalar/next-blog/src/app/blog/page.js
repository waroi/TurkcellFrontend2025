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
      <h1 className="text-center">Bloglar</h1>
      <div className="row mb-3">
        {blogs.map((blog) => (
          <PostCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
