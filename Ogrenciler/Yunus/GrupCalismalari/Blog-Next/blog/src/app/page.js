'use client'

import { useDispatch, useSelector } from "react-redux";
import { addBlog, setBlogs } from "./redux/slice/blogSlice";
import { useEffect } from "react";
import { BlogService } from "./services/blogService";
import AddModal from "./components/Modals/AddModal";
import Image from "next/image";
import Link from "next/link";
import Blogs from "./components/Blogs/Blogs";

export default function Home() {
  const blogs = useSelector(state => state.blogs.blogs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addBlog({ id: 34, name: "fahri" }))

    const getBlogs = async () => {
      const fetchedBlogs = await BlogService.getAllBlogs()
      dispatch(setBlogs(fetchedBlogs))
    }
    getBlogs()
  }, [])

  return (
    <main className="container mt-5">

      <AddModal />

      <div className="row mb-5 py-5">
        <Blogs blogs={blogs} />
      </div>
    </main>
  );
}
