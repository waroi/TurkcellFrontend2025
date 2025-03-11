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
    blogState.fetchBlogs(); // Blogları store'a çekiyoruz
  }, []);

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
          {blogState.blogs.map((blog, index) => (
            <Card key={index} blog={blog} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
