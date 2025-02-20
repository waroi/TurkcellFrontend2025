import { useEffect, useState } from "react";

const Fetch = () => {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState({
    title: "",
    text: "",
    date: "",
    author: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  const postBlog = () => {
    return fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((response) => response.json())
      .then((result) => {
        setBlogs((prevBlogs) => [...prevBlogs, result]); 
      })
      .catch((err) => setError(err.message));
  };


return { blogs, blog, setBlog, postBlog };
};

export default Fetch;
