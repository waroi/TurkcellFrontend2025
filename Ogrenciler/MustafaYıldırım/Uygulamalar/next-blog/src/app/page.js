"use client";

import { useEffect, useState } from "react";
import { getBlogs } from "../api/Api";
import HomeCard from "@/components/HomeCard";
import Link from "next/link";
import Banner from "@/components/Banner";

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
      <div className="container py-4 py-md-5 text-center">
        <h1 className="display-4 fw-bold">M&lt;ela&gt;M</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
          Dijital sınırdan içgörüler, hikayeler ve fikirler
        </p>
      </div>
      <Banner />
      <div className="container">
        <div className=" d-flex justify-content-between align-items-center my-2">
          <h2>Recent Blogs</h2>

          <Link href="/blog" className="text-decoration-none text-dark">
            <button className="btn btn-dark"> Tümünü Görüntüle</button>
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
