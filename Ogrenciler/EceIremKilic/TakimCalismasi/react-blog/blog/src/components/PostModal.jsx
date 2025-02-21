import { useState } from "react";
import { postBlog, deleteBlog, updateBlog } from "../core/RequestModel";

const PostModal = ({ isOpen, onClose }) => {
  const [newPost, setNewPost] = useState({
    blogTitle: "",
    blogContent: "",
    blogCategory: "Teknoloji",
    blogImage: "",
    blogAuthorName: "",
    blogReleaseDate: "",
  });
  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.id]: e.target.value });
  };

  const savePost = async () => {
    if (Object.values(newPost).some((value) => value === "")) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }
    console.log("newPost:", newPost);
    await postBlog(newPost);
    onClose();
  };
  return (
    <div
      className={`post-modal modal fade ${isOpen ? "show d-block" : "d-none"}`}
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Yeni Blog Ekle</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <label htmlFor="blogTitle" className="form-label">
              Blog Adı
            </label>
            <input
              type="text"
              className="form-control"
              id="blogTitle"
              placeholder="Blog Adı"
              value={newPost.blogTitle}
              onChange={handleChange}
            />
            <label htmlFor="blogContent" className="form-label">
              Blog İçeriği
            </label>
            <input
              type="text"
              className="form-control"
              id="blogContent"
              placeholder="Detaylı Açıklama"
              value={newPost.blogContent}
              onChange={handleChange}
            />
            <label htmlFor="blogCategory" className="form-label">
              Kategori
            </label>
            <select
              id="blogCategory"
              className="form-select"
              value={newPost.blogCategory}
              onChange={handleChange}
            >
              <option value="Teknoloji">Teknoloji</option>
              <option value="Sağlık">Sağlık</option>
              <option value="Kitap">Kitap</option>
              <option value="Yemek">Yemek</option>
              <option value="Seyahat">Seyahat</option>
              <option value="Spor">Spor</option>
              <option value="İş Dünyası">İş Dünyası</option>
              <option value="Kişisel Gelişim">Kişisel Gelişim</option>
              <option value="Diğer">Diğer</option>
            </select>
            <label htmlFor="blogReleaseDate" className="form-label">
              Yayın Tarihi
            </label>
            <input
              type="date"
              className="form-control"
              id="blogReleaseDate"
              value={newPost.blogReleaseDate}
              onChange={handleChange}
            />
            <label htmlFor="blogImage" className="form-label">
              Resim URL
            </label>
            <input
              type="text"
              className="form-control"
              id="blogImage"
              placeholder="Resim URL"
              value={newPost.blogImage}
              onChange={handleChange}
            />
            <label htmlFor="blogAuthorName" className="form-label">
              Yazar Adı
            </label>
            <input
              type="text"
              className="form-control"
              id="blogAuthorName"
              placeholder="Blog Yazarı"
              value={newPost.blogAuthorName}
              onChange={handleChange}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={savePost}
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
