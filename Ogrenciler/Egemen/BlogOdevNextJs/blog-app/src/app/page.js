"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllBlog, searchBlogs } from "../app/redux/slices/blogSlice";
import { useSelector } from "react-redux";
import { getAllBLogs } from "../../firebase/dbController";
import Carousel from "./components/organisms/carousel/Carousel";
import Map from "./components/organisms/cardContainer/Map";

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
  }, [searchTerm]);

  return (
    <div>
      <main className="container">
        <h3 className="my-3 text-center text-dark fw-semibold">
          Blog Yazıları
        </h3>
        <Carousel />
        <Map blogs={blogs} />
      </main>
    </div>
  );
}
