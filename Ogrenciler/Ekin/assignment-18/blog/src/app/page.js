"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./components/Navigation";
import Card from "./components/Card";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

import { getBlogs } from "./database";

import "./main.scss";
// import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then((response) => setBlogs(response));
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <div className="container py-5">
          {blogs.map((blog) => (
            <Card key={blog.id} blog={blog} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
