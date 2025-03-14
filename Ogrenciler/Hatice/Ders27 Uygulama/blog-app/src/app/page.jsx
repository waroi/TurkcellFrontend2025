"use client";
import { useEffect, useState } from "react";
import BlogList from "./_components/BlogList";
import { filterStrings } from "@/utils/functions";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import apiFetch from "@/utils/service";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);
      // ...
      return;
    } else {
      // User is signed out
      // ...
      console.log("hello");
      //logine gönderilecek ama henüz fonksiyonumuz iyi çalışmıyor
    }
  });

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
