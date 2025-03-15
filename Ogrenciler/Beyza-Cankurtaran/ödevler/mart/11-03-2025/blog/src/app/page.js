"use client";
import BlogCard from "../component/BlogCard";
import blogs from "../data/blog.json";
import { useSearch } from "@/context/searchContext";
import { useAuth } from "@/context/authContext";
export default function Home() {
  const { searchQuery } = useSearch();
  const { isLoggedIn } = useAuth();

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-2 mb-3 mt-5 pt-5">
          "Hazır mısın? Okumaya Başla!"
        </h1>
        <div className="row gy-3 mb-5">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
}
