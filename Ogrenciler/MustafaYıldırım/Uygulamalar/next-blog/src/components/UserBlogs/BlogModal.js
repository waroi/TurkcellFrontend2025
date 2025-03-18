"use client";
import React from "react";

const BlogModal = ({isOpen, currentBlog, onClose, onSubmit}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className={`modal fade show d-block`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {currentBlog ? "Blog Düzenle" : "Yeni Blog Ekle"}
              </h5>
              <button type="button" className="btn-close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Başlık</label>
                  <input
                    className="form-control"
                    name="title"
                    defaultValue={currentBlog?.title || ""}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">İçerik</label>
                  <textarea
                    className="form-control"
                    name="content"
                    defaultValue={currentBlog?.content || ""}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Resim URL</label>
                  <input
                    className="form-control"
                    name="image"
                    defaultValue={currentBlog?.image || ""}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Kategori</label>
                  <input
                    className="form-control"
                    name="category"
                    defaultValue={currentBlog?.category || ""}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success">
                    Kaydet
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onClose}
                  >
                    Kapat
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </>
  );
};

export default BlogModal;
