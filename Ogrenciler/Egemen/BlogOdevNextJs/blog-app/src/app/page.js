"use client";
import styles from "./page.module.css";
import { getBlog } from "../../services/Api";
import { useEffect } from "react";
import Card from "../app/components/Card";
import { useDispatch } from "react-redux";
import { addAllBlog } from "../app/redux/slices/blogSlice";
import { useSelector } from "react-redux";

export default function Home() {

  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchBlog() {
      const data = await getBlog();
      if (data) {
        console.log("Blog Verisi:", data);
        dispatch(addAllBlog(data));
      }
    }
    fetchBlog();
  }, []);

  return (
    <div className={styles.page}>
      <main className="container">
        <h1>Blog Yazıları</h1>
        <div className="row">
          {blogs.length > 0 ? (
            blogs?.map((blog) => (
              <div key={blog?.id} className="col-12">
                <Card key={blog?.id + "card"} card={blog} />
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
