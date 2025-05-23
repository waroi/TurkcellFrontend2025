"use client";
import { useEffect, useState, useRef } from "react";
import BlogList from "./_components/BlogList";
import { filterStrings } from "@/utils/functions";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import apiFetch from "@/utils/services/service";
import { useRouter } from "next/navigation";
import AddBlogForm from "./_components/AddBlogForm";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const [blogToUpdate, setBlogToUpdate] = useState(null);
  const router = useRouter();
  const auth = getAuth();
  const formRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [auth, router]);

  const getBlogs = async () => {
    try {
      const response = await apiFetch(`/blogs`);
      if (!response.ok) {
        console.error(response.status);
        return;
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    if (blogToUpdate && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [blogToUpdate]);

  const filteredBlogs = filterStrings(blogs, "title", searchQuery);

  return (
    <>
      <div className="container">
        <h1 className="font-bold mt-4 mb-4 text-center p-4">Blog Yazıları</h1>
        <input
          type="text"
          placeholder="Ara..."
          className="form-control mb-4"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <AddBlogForm getBlogs={getBlogs} blogToUpdate={blogToUpdate} setBlogToUpdate={setBlogToUpdate}/>
        <BlogList blogs={filteredBlogs} getBlogs={getBlogs} onUpdate={setBlogToUpdate}/>
      </div>
    </>
  );
};

export default Home;
