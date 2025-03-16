"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import apiFetch from "@/utils/services/service";
import Button from "./Button";
import { addBlog } from "@/utils/services/helpers";

const AddBlogForm = ({ getBlogs }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [poster, setPoster] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !author) {
      toast.error("Lütfen tüm alanları doldurun");
      return;
    }
    const newBlog = {
      title,
      content,
      author,
      date: new Date().toISOString(),
      poster: poster || "https://picsum.photos/200/300",
    };
    try {
      const result = await addBlog(newBlog);
      if (!result) {
        return;
      }
      toast.success("Blog başarıyla eklendi");
      setTitle("");
      setContent("");
      setAuthor("");
      setPoster("");
      getBlogs();
    } catch (error) {
      console.error(error);
      toast.error("Bir hata oluştu");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow mb-4">
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Başlık</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog başlığı"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">İçerik</label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Blog içeriği"
          ></textarea>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Yazar</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Yazar adı"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Poster URL (Opsiyonel)</label>
          <input
            type="text"
            className="form-control"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
            placeholder="Poster URL"
          />
        </div>
      </div>
      <Button type="submit" className="w-100">
        Blog Ekle
      </Button>
    </form>
  );
};

export default AddBlogForm;
