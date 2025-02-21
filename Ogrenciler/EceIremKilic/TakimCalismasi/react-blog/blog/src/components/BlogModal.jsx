import React from "react";
import { useState } from "react";
import { deleteBlog, updateBlog } from "../core/RequestModel";
const BlogModal = ({
  id,
  blogTitle,
  blogImage,
  blogCategory,
  blogContent,
  blogAuthorImg,
  blogAuthorName,
  blogReleaseDate,
  closeModal,
  isOpen,
}) => {
  const [deletePost, setDeletePost] = useState(false);
  const [updatePost, setUpdatePost] = useState(false);
  const deleteThisPost = async (id) => {
    try {
      const response = await deleteBlog(id);
      
      console.log("Gelen yanıt:", response); // Yanıtın içeriğini kontrol et
  
      // Yanıt kontrolü yapalım
      if (!response || !response.ok) {
        console.error(`Silme işlemi başarısız: ${response ? response.status : 'No response'}`);
        throw new Error("Silme işlemi başarısız oldu!");
      }
  
      if (response.status === 200 || response.ok) {
        console.log("Blog başarıyla silindi");
        setDeletePost(true);  // Bu state'in doğru şekilde güncellenip güncellenmediğini kontrol et
        closeModal();  // Modal kapanma işlemi
      }
    } catch (error) {
      console.error("Silme işlemi sırasında hata oluştu:", error);
    }
  };
  

  const updateThisPost = async () => {
    await updateBlog(newPost);
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
            <h5 className="modal-title">{blogTitle}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={blogImage}
              alt=""
              className="img-fluid rounded-top-4 mb-3 modal-post-img"
            />
            <div>
              <p className="badge rounded-pill px-3 my-2 text-bg-primary flex-end">
                {blogCategory}
              </p>
              <p>{blogContent}</p>
              <div className="card-post-detail d-flex align-items-center">
                <img
                  src={blogAuthorImg}
                  className="p-0 img-fluid rounded-circle avatar me-2"
                  alt=""
                />
                <div>
                  <p className="mb-0">By → {blogAuthorName}</p>
                  <p className="mb-0 text-muted date-text">{blogReleaseDate}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteThisPost(id)}
            >
              Sil
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => updateThisPost()}
            >
              Güncelle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
