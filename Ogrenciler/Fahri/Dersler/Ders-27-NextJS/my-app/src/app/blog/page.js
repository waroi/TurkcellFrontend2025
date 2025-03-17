"use client"

import { useBlogData } from "../utils/hooks/useBlogData";
import FunSection from "../components/FuncSection/FunSection"
import "./BlogList.css"
import BlogHeader from "../components/BlogHeader/BlogHeader";
import BlogGrid from "../components/BlogGrid/BlogGrid";

const BlogList = () => {
  const { blogs, status } = useBlogData()

  return (
    <div className="blog-list-container">
      <BlogHeader status={status} />
      <BlogGrid blogs={blogs} />
      <FunSection />
    </div>
  )
}

export default BlogList