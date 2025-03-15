"use client";

import BlogCard from "@/components/BlogCard/BlogCard";
import useBlogStore from "@/store/blogStore";
import { useEffect } from "react";

function HomeContent() {
  const filteredBlogs = useBlogStore((state) => state.filteredBlogs);
  const blogs = useBlogStore((state) => state.blogs);
  const fetchBlogs = useBlogStore((state) => state.fetchBlogs);
  const searchInput = useBlogStore((state) => state.searchInput);

useEffect(()=>{
	fetchBlogs();
},[blogs])

  useEffect(() => {
}, [filteredBlogs]);

  return (
    <section className="container">
      <div className="row">
        <section className="container">
          <div className="row">
            {searchInput === "" && filteredBlogs != []
              ? blogs?.map((blog) => <BlogCard key={blog.id} {...blog} />)
              : filteredBlogs?.map((blog) => (
                  <BlogCard key={blog.id} {...blog} />
                ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default HomeContent;
