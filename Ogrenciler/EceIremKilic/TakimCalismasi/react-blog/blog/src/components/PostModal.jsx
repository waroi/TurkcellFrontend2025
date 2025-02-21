import { useState } from "react";
import { postBlog } from "../core/RequestModel";

const PostModal = ({ isOpen, onClose }) => {
  const SetAuthorImg = (blogAuthorName) => {
    switch (blogAuthorName) {
      case "Ece":
        return "https://media.licdn.com/dms/image/v2/D4D03AQGcnFAMs-OVDg/profile-displayphoto-shrink_200_200/B4DZPbnWuLHUAc-/0/1734556348739?e=1745452800&v=beta&t=rdzgExb4q8liQ27W3zSkuzP4qQiVhUz02imXX2V7TBY";
      case "Ela":
        return "https://media.licdn.com/dms/image/v2/D4D03AQHGEWxP5zW_uQ/profile-displayphoto-shrink_800_800/B4DZUgoo2GHkAc-/0/1740009279730?e=1745452800&v=beta&t=8EVZoyI9G-vz_oEHKhD3F07JcRzpMWI3S3FSiWMXq9U";
      case "M. Fatih":
        return "https://media.licdn.com/dms/image/v2/D4D03AQH4bMMiVhFX9Q/profile-displayphoto-shrink_800_800/B4DZPqq12wHUAo-/0/1734808922598?e=1745452800&v=beta&t=QOHYTQlKOooKFKEve3gO3L--q0rOFCPijVVLCGRi__0";
      default:
        return "";
    }
  };

  const [newPost, setNewPost] = useState({
    id: Date.now(),
    blogTitle: "",
    blogContent: "",
    blogCategory: "Teknoloji",
    blogImage: "",
    blogAuthorName: "",
    blogAuthorImg: "",
    blogReleaseDate: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [id]: value,
      blogAuthorImg:
        id === "blogAuthorName" ? SetAuthorImg(value) : prevPost.blogAuthorImg,
    }));
  };

  const savePost = async () => {
    const requiredFields = [
      "blogTitle",
      "blogContent",
      "blogCategory",
      "blogReleaseDate",
      "blogAuthorName",
    ];
    if (requiredFields.some((field) => !newPost[field])) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }
    console.log("newPost:", newPost);
    await postBlog(newPost);
    onClose();
  };

  return (
    <div
      className={`post-modal modal modal-lg fade ${
        isOpen ? "show d-block" : "d-none"
      }`}
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content p-3 rounded-5">
          <div className="modal-header">
            <h5 className="modal-title text-primary fw-bold">Yeni Blog Ekle</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <label
              htmlFor="blogTitle"
              className="form-label text-primary fw-bold"
            >
              Blog Adı
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="blogTitle"
              placeholder="Blog Adı"
              value={newPost.blogTitle}
              onChange={handleChange}
            />

            <label
              htmlFor="blogContent"
              className="form-label text-primary fw-bold"
            >
              Blog İçeriği
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="blogContent"
              placeholder="Detaylı Açıklama"
              value={newPost.blogContent}
              onChange={handleChange}
            />

            <div className="row mb-3">
              <div className="col-6">
                <label
                  htmlFor="blogCategory"
                  className="form-label text-primary fw-bold"
                >
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
              </div>
              <div className="col-6">
                <label
                  htmlFor="blogReleaseDate"
                  className="form-label text-primary fw-bold"
                >
                  Yayın Tarihi
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="blogReleaseDate"
                  value={newPost.blogReleaseDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label
              htmlFor="blogImage"
              className="form-label text-primary fw-bold"
            >
              Resim URL
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="blogImage"
              placeholder="Resim URL"
              value={newPost.blogImage}
              onChange={handleChange}
            />

            <label
              htmlFor="blogAuthorName"
              className="form-label text-primary fw-bold"
            >
              Yazar Adı
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="blogAuthorName"
              placeholder="Blog Yazarı"
              value={newPost.blogAuthorName}
              onChange={handleChange}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary rounded-pill"
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
