import { useState } from "react";
import Button from "../atoms/Button";
import EditModal from "../EditModal";

const PostCard = ({ postItem, handleEdit, handleDelete, user, userId }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onDelete = (id) => {
    const isConfirmed = window.confirm("Silme işleminden emin misiniz?");
    if (isConfirmed) {
      handleDelete(id);
    }
  };

  const handleDate = (date) => {
    return date.slice(0, 10);
  };
  return (
    <>
      <EditModal
        show={show}
        handleClose={handleClose}
        postItem={postItem}
        handleEdit={handleEdit}
        user={user}
      />
      <div className="post-card p-2 overflow-hidden d-flex align-items-center justify-content-between gap-5">
        <div>
          <div className="post-content py-5">
            <h2 className="post-title fw-bold mb-4 fs-2">{postItem?.title}</h2>
            <p className="post-body mb-5">{postItem?.body}</p>
            <div className="post-footer d-flex justify-content-between align-itemms-center pb-4">
              <span className="post-topic">{postItem?.topic}</span>
              <div className="d-flex justify-content-between align-items-center gap-2">
                <span className="post-date">
                  {postItem.created_at && handleDate(postItem?.created_at)}
                </span>
                <span className="post-author">{postItem?.author}</span>
              </div>
            </div>
            {postItem?.userId === userId ? (
              <div className="d-flex gap-2 mt-3">
                <Button
                  className="btn"
                  variant="btn-warning"
                  onClick={() => handleShow()}
                >
                  ✏️ Edit
                </Button>
                <Button
                  className="btn"
                  variant="btn-danger"
                  onClick={() => onDelete(postItem?.id)}
                >
                  🗑 Delete
                </Button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <img
          src={postItem.image}
          alt={postItem.title}
          className="post-image d-none d-lg-block"
        />
      </div>
    </>
  );
};

export default PostCard;
