import React from "react";

const BlogModal = ({ blogTitle, blogContent, closeModal, isOpen }) => {
  return (
    <div
      className={`modal fade ${isOpen ? "show d-block" : "d-none"}`}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{blogTitle}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <p>{blogContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
