
"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { getBlog } from "../../services/Api"
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
      <main className={styles.main}>

        <h1>Blog Yazıları</h1>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Card card={blog} key={blog.id} />
          ))
        ) : (
          <p>Yükleniyor...</p>
        )}














      </main>


    </div>

  );
}
