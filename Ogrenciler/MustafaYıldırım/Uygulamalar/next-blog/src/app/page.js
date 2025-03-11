"use client";
import Image from "next/image";
import styles from "./page.module.css";

import { useEffect, useState } from "react";
import { getBlogs } from "../api/Api";
import PostCard from "../components/PostCard";
import HomeCard from "@/components/HomeCard";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {blogs.slice(0,4).map((blog) => (
            <HomeCard blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </>
  );
}
