import React from "react";
import Input from "../Input";

const Form = () => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h5 className="display-6 fs-3 mb-5 text-center">
          Post İçeriğini Düzenle
        </h5>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Post Görsel URL'i
          </label>
          <Input id="image" value={editedPost.image} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Başlığı
          </label>
          <Input id="title" value={editedPost.title} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Post İçeriği
          </label>
          <Input
            id="content"
            value={editedPost.content}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Post Yazarı
          </label>
          <Input
            id="author"
            value={editedPost.author}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="release-date" className="form-label">
            Post Yayınlanma Tarihi
          </label>
          <Input
            type="date"
            id="releaseDate"
            value={editedPost.releaseDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Güncelle
        </button>
      </form>
    </div>
  );
};

export default Form;
