"use client";

import { useEffect } from "react";

import useBlog from "@/blogs";
import { getBlogs } from "@/firebase";

import Navigation from "@/components/Navigation";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  const blogState = useBlog();

  useEffect(() => {
    getBlogs().then(blogState.setBlogs);
  }, []);

  return (
    <>
      <Navigation active="home" />
      <main className="page-body">
        <div className="container py-5">
          {blogState.blogs.map((blog, index) => (
            <Card key={index} blog={blog} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
