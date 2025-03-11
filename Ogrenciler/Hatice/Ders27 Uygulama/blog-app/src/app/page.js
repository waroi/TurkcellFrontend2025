'use client'
import { useEffect, useState } from "react";
import BlogList from "./Components/BlogList";


const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/blogs")
    .then((res) => res.json())
    .then((data) => setBlogs(data.blogs));
  }, []);

  return (
    <>
    <div className="container">
      <h1 className="font-bold">Blog Yazıları</h1>
      <BlogList blogs={blogs}/>
    </div>
    </>
  );
}


export default Home;