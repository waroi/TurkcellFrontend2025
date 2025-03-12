"use client";
import styles from "./page.module.css";
import { getBlog } from "../../services/Api";
import { useEffect } from "react";
import Card from "../app/components/Card";
import { useDispatch } from "react-redux";
import { addAllBlog, searchBlogs } from "../app/redux/slices/blogSlice";
import { useSelector } from "react-redux";

export default function Home() {
  const blogs = useSelector((state) => state.blog.blogs);
  const searchTerm = useSelector((state) => state.blog.searchTerm);
  const dispatch = useDispatch();
  useEffect(() => {
    if (searchTerm == "") {
      async function fetchBlog() {
        const data = await getBlog();
        if (data) {
          dispatch(addAllBlog(data));
        }
      }
      fetchBlog();
    } else {
      dispatch(searchBlogs(searchTerm));
    }
  }, [searchTerm]);

  return (
    <div className={styles.page}>
      <main className="container">
        <h3 className="my-3 text-center text-success fw-semibold">
          Blog Yazıları
        </h3>
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
