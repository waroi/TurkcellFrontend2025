"use client";

import Navigation from "./components/Navigation";
import Card from "./components/Card";
import Footer from "./components/Footer";

import blog from "./blogs";

import "./main.scss";
import { useEffect } from "react";

export default function Home() {
  const blogState = blog();

  useEffect(() => {
    blogState.getBlogs();
  }, []);

  return (
    <>
      <Navigation active="home" />
      <main>
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
