"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getBlogs } from "../../api/Api";
import PostCard from "../../components/PostCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="text-center">Bloglar</h1>
      <div className="row mb-3">
        {filteredBlogs.map((blog) => (
          <div className="col-md-4">
            <PostCard blog={blog} key={blog.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
