"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./components/Navigation";
import Card from "./components/Card";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

import { getBlogs } from "./database";

import blog from "./blogs";

import "./main.scss";
// import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  const blogState = blog();

  // useEffect(() => {
  //   getBlogs().then((response) => setBlogs(response));
  // }, []);

  console.log(blogState);

  return (
    <>
      <button
        onClick={() =>
          blogState.addBlog({
            // id: "metafizik-nedir",
            title: "AAAAAAAAAAAA Yasanın Metafiziği: Hukuk, Ahlak ve Varlık",
            image:
              "https://www.aydemperakende.com.tr/storage/blog/00000-Blog/AydemBlog_Metafizik-Meta.webp",
            description:
              "Hukuk ve ahlak yasalarının metafiziksel temelleri, varlık anlayışımızı ve etik normları şekillendirir. Yasaların doğası, evrenselliği ve varlıkla olan ilişkisini tartışacağız.",
            date: 1742695699380,
            content: "CONTENT",
          })
        }
      >
        HELLOOO
      </button>
      <Navigation />
      <main>
        <div className="container py-5">
          {blogState.blogs.map((blog) => (
            <Card key={blog.id} blog={blog} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
