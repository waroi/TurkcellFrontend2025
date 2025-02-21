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

  const postBlog = async () => {
    try {
      const response = await fetch("http://localhost:3000/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
      const result_1 = await response.json();
      setBlogs((prevBlogs) => [...prevBlogs, result_1]);
    } catch (err) {
      return setError(err.message);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await fetch(`http://localhost:3000/blogs/${id}`, {
        method: "DELETE",
      });
      return setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    } catch (error) {
      return console.error("Blog silme hatası:", error);
    }
  };

  // this.updateGame = async function (gameId, updatedGame) {
  //   try {
  //     const response = await fetch(`${this.apiURL}/${gameId}`, {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(updatedGame)
  //     });
  //     return await response.json();
  //   } catch (error) {
  //     return console.error("Oyun güncellenirken hata oluştu:", error);
  //   }
  // };

  return { blogs, blog,selectedId, setBlog, postBlog, deleteBlog,setSelectedId };
};

export default Fetch;
