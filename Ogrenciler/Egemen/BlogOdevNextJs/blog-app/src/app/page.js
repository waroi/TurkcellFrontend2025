"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { getBlog } from "../../services/Api";
import { useState, useEffect } from "react";
import Card from "../app/components/Card";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getBlog();
      if (data) {
        console.log("Blog Verisi:", data); // Konsolda JSON verisini görebilirsin.
        setBlogs(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.page}>
      <main className="container">
        <h1>Blog Yazıları</h1>
        <div className="row">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog.id} className="col-12">
                <Card card={blog} />
              </div>
            ))
          ) : (
            <p>Yükleniyor...</p>
          )}
        </div>
      </main>
    </div>
  );
}
