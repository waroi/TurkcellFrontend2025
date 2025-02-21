import React, { useState } from "react";
import { deleteBlog, updateBlog } from "../core/RequestModel";

const BlogModal = ({
  post,
  closeModal,
  isOpen,
}) => {
  const deleteThisPost = async (post) => {
    console.log("Silinecek Blog ID:", post.id); 
    if (!post.id) {
      console.error("ID geçerli değil!");
      return;
    }
    try {
      const response = await deleteBlog(post.id); 
      console.log("Silme işlemi başarılı:", response);
      closeModal(); 
    } catch (error) {
      console.error("Silme işlemi sırasında hata oluştu:", error);
    }
  };

  const updateThisPost = async (post) => {
    
    await updateBlog(post);
    closeModal();
  };

  return (
    <div
      className={`modal modal-lg fade ${isOpen ? "show d-block" : "d-none"}`}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content p-3 rounded-5">
          <div className="modal-header">
            <h5 className="modal-title text-primary fw-bold">{post?.blogTitle}</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <img
              src={post?.blogImage}
              alt=""
              className="img-fluid rounded-top-4 mb-3 modal-post-img"
            />
            <div>
              <p className="badge rounded-pill px-3 my-2 text-bg-primary flex-end">
                {post?.blogCategory}
              </p>
              <p>{post?.blogContent}</p>
              <div className="card-post-detail d-flex align-items-center">
                <img
                  src={post?.blogAuthorImg}
                  className="p-0 img-fluid rounded-circle avatar me-2"
                  alt=""
                />
                <div>
                  <p className="mb-0">By → {post?.blogAuthorName}</p>
                  <p className="mb-0 text-muted date-text">{post?.blogReleaseDate}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary rounded-pill px-4 text-white fw-bold"
              onClick={() => deleteThisPost(post)} 
            >
              Sil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
