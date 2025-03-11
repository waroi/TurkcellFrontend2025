"use client";

import { useEffect, useState } from "react";
import { getBlogs } from "../api/Api";
import HomeCard from "@/components/HomeCard";
import Link from "next/link";

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
        <div className=" d-flex justify-content-between align-items-center my-2">
          <h2>Recent Blogs</h2>

          <Link href="/blog" className="text-decoration-none text-dark">
            <button className="btn btn-primary"> Tümünü Görüntüle</button>
          </Link>
        </div>
        <div className="row">
          {blogs.slice(0, 4).map((blog) => (
            <HomeCard blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </>
  );
}
