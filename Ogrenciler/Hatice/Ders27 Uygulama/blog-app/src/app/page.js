"use client";
import { useEffect, useState } from "react";
import BlogList from "./Components/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const url = process.env.NEXT_SERVER_URL;
    console.log("url", url);
    fetch(`http://localhost:8000/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <div className="container">
        <h1 className="font-bold mt-4 mb-4 text-center p-4">Blog Yazıları</h1>
        <input
          type="text"
          placeholder="Ara..."
          className="form-control mb-4"
          onChange={(e) => setSearchQuery(e.target.value)}/>
        <BlogList blogs={filteredBlogs} />
      </div>
    </>
  );
};

export default Home;
