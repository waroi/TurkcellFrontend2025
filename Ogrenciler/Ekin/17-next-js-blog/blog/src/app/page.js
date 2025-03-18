"use client";

import { useEffect } from "react";

import useBlog from "@/store/blogs";
import { getBlogs } from "@/services/firebase";

import Layout from "@/components/Layout";
import Card from "@/components/Card";

import scrollInterpolation from "@/util/scrollInterpolation";

export default function Home() {
  const blogState = useBlog();

  useEffect(() => {
    getBlogs().then(blogState.setBlogs);

    let interval = scrollInterpolation(document.querySelector("main"));

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Layout mainClass="home">
      <section className="container py-5">
        {blogState.blogs.map((blog, index) => (
          <Card key={index} blog={blog} />
        ))}
      </section>
    </Layout>
  );
}
