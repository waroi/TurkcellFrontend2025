import React from "react";
import { deleteBook, setBook } from "../redux/slices/bookSlice";
import { useDispatch } from "react-redux";
import UpdateModal from "./UpdateModal";
import { deleteBooks } from "../services/Api";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdVisibility } from "react-icons/md";
import ReviewBook from "./ReviewBook";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const BookCard = ({ book, isAdmin }) => {
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(setBook(book));
  };
  const handleDelete = () => {
    dispatch(deleteBook(book.id));
    deleteBooks(book.id);
  };

  const handleReview = () => {
    dispatch(setBook(book));
  };
  return (
    <div className="col-lg-6 mb-4 book-card">
  <div className="card border-0 shadow-lg hover-card h-100 rounded-3">
    <div className="row g-0">
      <div className="col-md-5">
        <div className="h-100" style={{ overflow: "hidden" }}>
          <img
            src={
              book?.imgUrl ||
              "https://admin.kolpobd.com/images/news/news.png"
            }
            className="img-fluid rounded-start w-100 image-hover-effect news-card-img"
            alt={book?.title || "Default Image"}
          />
        </div>
      </div>
      <div className="col-md-7">
        <div className="card-body d-flex flex-column h-100">
          <div className="mb-3">
            <span className="badge bg-secondary fs-6">{book?.year}</span>
          </div>
          <h5 className="card-title fw-bold text-dark">{book?.title}</h5>

          <p className="text-muted mb-2">{book?.author || "Anonim"}</p>

          <div className="d-flex mb-3">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index}>
                {index < 4 ? (
                  <FaStar className="text-warning fs-6" />
                ) : (
                  <FaStarHalfAlt className="text-warning fs-6" />
                )}
              </span>
            ))}
          </div>
          <p className="card-text text-muted">
            {book?.description?.split(" ").slice(0, 20).join(" ")}...
          </p>

          <p>
            <strong>Yayınevi:</strong> {book?.publisher}
          </p>

          <div className="mt-auto">
            <div className="d-flex justify-content-end gap-2 mt-3">
              {isAdmin ? (
                <>
                  <button
                    className="btn btn-warning text-white fs-5 d-flex align-items-center justify-content-center p-2"
                    onClick={handleUpdate}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <MdEdit />
                  </button>
                  <button
                    className="btn btn-danger fs-5 d-flex align-items-center justify-content-center p-2"
                    onClick={handleDelete}
                  >
                    <MdDeleteForever />
                  </button>
                </>
              ) : null}
              <button
                className="btn btn-primary text-white fs-5 d-flex align-items-center justify-content-center p-2"
                onClick={handleReview}
                data-bs-toggle="modal"
                data-bs-target={`#reviewModal-${book.id}`}
              >
                <MdVisibility />
              </button>
            </div>
          </div>
          <ReviewBook />
          <UpdateModal />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default BookCard;
