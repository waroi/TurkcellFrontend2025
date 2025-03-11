"use client";
import { useEffect, useState } from "react";
import BlogList from "./Components/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const url = process.env.NEXT_SERVER_URL;
    console.log("url", url);
    fetch(`http://localhost:8000/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="font-bold">Blog Yazıları</h1>
        <BlogList blogs={blogs} />
      </div>
    </>
  );
};

export default Home;
