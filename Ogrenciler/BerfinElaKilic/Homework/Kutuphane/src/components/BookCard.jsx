import React from "react";
import { deleteBook, setBook } from "../redux/slices/bookSlice";
import { useDispatch } from "react-redux";
import UpdateModal from "./UpdateModal";
import { deleteBooks } from "../services/Api";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(setBook(book));
  };
  const handleDelete = () => {
    dispatch(deleteBook(book.id));
    deleteBooks(book.id);
  };
  return (
    <div className="col-lg-6 mb-4">
      <div className="card border-0 shadow-sm hover-card h-100">
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
              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-secondary">{book?.year}</span>
                </div>
                <h5 className="card-title fw-bold">{book?.title}</h5>
                <p className="">{book?.author || "Anonim"}</p>
                <p className="card-text text-muted">
                  {book?.description?.split(" ").slice(0, 20).join(" ")}...
                </p>
              </div>
              <div className="mt-auto">
                <div className="d-flex justify-content-end gap-2 mt-3">
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
                </div>
              </div>
              <UpdateModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
