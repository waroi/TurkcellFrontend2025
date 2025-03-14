"use client";

import { useEffect } from "react";

import useBlog from "@/blogs";
import { getBlogs } from "@/firebase";

import Layout from "@/components/Layout";
import Card from "@/components/Card";

export default function Home() {
  const blogState = useBlog();

  useEffect(() => {
    getBlogs().then(blogState.setBlogs);
  }, []);

  return (
    <Layout>
      <section className="container py-5">
        {blogState.blogs.map((blog, index) => (
          <Card key={index} blog={blog} />
        ))}
      </section>
    </Layout>
  );
}
