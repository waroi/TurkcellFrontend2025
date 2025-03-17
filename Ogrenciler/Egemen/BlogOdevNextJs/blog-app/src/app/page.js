"use client";
import { useEffect } from "react";
import Card from "./components/molecules/card/Card";
import { useDispatch } from "react-redux";
import { addAllBlog, searchBlogs } from "../app/redux/slices/blogSlice";
import { useSelector } from "react-redux";
import { getAllBLogs } from "../../firebase/dbController";
import Carousel from "./components/organisms/carousel/Carousel";

export default function Home() {
  const blogs = useSelector((state) => state.blog.blogs);
  const searchTerm = useSelector((state) => state.blog.searchTerm);
  const dispatch = useDispatch();
  useEffect(() => {
    if (searchTerm == "") {
      async function fetchBlog() {
        const data = await getAllBLogs();
        if (data) {
          dispatch(addAllBlog(data));
        }
      }
      fetchBlog();
    } else {
      dispatch(searchBlogs(searchTerm));
    }
  }, [searchTerm, blogs]);

  return (
    <div>
      <main className="container">
        <h3 className="my-3 text-center text-dark fw-semibold">
          Blog Yazıları
        </h3>
        <Carousel />

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
