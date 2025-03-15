import { BlogService } from "@/services/blogService";
import { useState } from "react";

const AddNewsModal = () => {
  const [news, setNews] = useState({
    title: "",
    author: "",
    date: "",
    category: "",
    image: "",
    content: "",
  });

  const handleUpdateForm = (e) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await BlogService.post(news);
      alert("Haber başarıyla eklendi!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className="modal fade"
      id="addNewsModal"
      tabIndex="-1"
      aria-labelledby="addNewsLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content p-3 rounded-4 shadow-lg border-0">
          <div className="modal-header rounded-top-4 py-0 border-0">
            <h1 className="modal-title fs-4 fw-bold text-black" id="addNewsLabel">
              📰 Haber Ekle
            </h1>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="">
              <div className="mb-3">
                <input
                  onChange={handleUpdateForm}
                  type="text"
                  className="form-control rounded-3 p-2 shadow-sm"
                  id="title"
                  name="title"
                  value={news.title}
                  placeholder="Haber başlığını giriniz..."
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={handleUpdateForm}
                  type="text"
                  className="form-control rounded-3 p-2 shadow-sm"
                  id="author"
                  name="author"
                  value={news.author}
                  placeholder="Yazar adını giriniz..."
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={handleUpdateForm}
                  type="date"
                  className="form-control rounded-3 p-2 shadow-sm"
                  id="date"
                  name="date"
                  value={news.date}
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={handleUpdateForm}
                  type="text"
                  className="form-control rounded-3 p-2 shadow-sm"
                  id="category"
                  name="category"
                  value={news.category}
                  placeholder="Kategori giriniz..."
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={handleUpdateForm}
                  type="text"
                  className="form-control rounded-3 p-2 shadow-sm"
                  id="image"
                  name="image"
                  value={news.image}
                  placeholder="Görsel URL'sini giriniz..."
                />
              </div>
              <div className="mb-3">
                <textarea
                  onChange={handleUpdateForm}
                  className="form-control rounded-3 p-2 shadow-sm"
                  id="content"
                  name="content"
                  rows="5"
                  value={news.content}
                  placeholder="Haber içeriğini giriniz..."
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer d-flex justify-content-between px-3 border-0 py-0">
            <button
              type="button"
              className="btn btn-outline-secondary px-4 py-2 rounded-3"
              data-bs-dismiss="modal"
            >
              Kapat
            </button>
            <button
              type="button"
              className="btn btn-dark px-4 py-2 rounded-3 fw-bold shadow"
              data-bs-dismiss="modal"
              onClick={handleSave}
            >
              Kaydet 📰
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewsModal;
