"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../../redux/slice/blogSlice";
import { useRouter } from "next/navigation";

const AddBlogForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content || !author) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    const newBlog = {
      id: crypto.randomUUID(),
      title,
      content,
      author,
    };

    dispatch(addBlog(newBlog));

    fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    }).then((res) => res.json());

    setTitle("");
    setContent("");

    router.push("/blog"); //! ekleme yapıldıktan sonra blog sayfasına yönlendirme yaptık
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Başlık:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog başlığını girin"
        />
      </div>
      <div>
        <label>Yazar:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Blog yazarını girin"
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Blog içeriğini yazın"
        />
      </div>
      <button type="submit">Ekle</button>
    </form>
  );
};

export default AddBlogForm;
