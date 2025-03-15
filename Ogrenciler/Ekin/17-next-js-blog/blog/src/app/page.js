"use client";

import { useEffect } from "react";

import useBlog from "@/store/blogs";
import { getBlogs } from "@/services/firebase";

import Layout from "@/components/Layout";
import Card from "@/components/Card";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const blogState = useBlog();

  useEffect(() => {
    getBlogs().then(blogState.setBlogs);
  }, []);

  return (
    <Layout>
      <button
        onClick={() => {
          router.push("/login");
        }}
      >
        DEBUG!!!!!!!!!!
      </button>
      <section className="container py-5">
        {blogState.blogs.map((blog, index) => (
          <Card key={index} blog={blog} />
        ))}
      </section>
    </Layout>
  );
}
