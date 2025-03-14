"use client";
import { useEffect, useState } from "react";
import BlogList from "./_components/BlogList";
import { filterStrings } from "@/utils/functions";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import apiFetch from "@/utils/services/service";
import { useRouter } from "next/navigation";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const router = useRouter();
  const auth = getAuth();

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

  useEffect(() => {
    apiFetch(`/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

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
        <BlogList blogs={filteredBlogs} />
      </div>
    </>
  );
};

export default Home;
