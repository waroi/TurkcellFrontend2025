import { useEffect, useState } from "react";

const Fetch = () => {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState({
    title: "",
    text: "",
    date: "",
    author: "",
  });

  const [selectedId,setSelectedId]=useState("");

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

  const deleteBlog = (id) => {
    return fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
    })
      .then(() => setBlogs((prev) => prev.filter((blog) => blog.id !== id)))
      .catch((error) => console.error("Blog silme hatası:", error));
  };

  return { blogs, blog,selectedId, setBlog, postBlog, deleteBlog,setSelectedId };
};

export default Fetch;
