import React from "react";
import { NavLink } from "react-router";
import { deleteBook } from "../../../firebase/dbController";
import { useDispatch, useSelector } from "react-redux";
import { removeBook } from "../../redux/slices/bookSlice";

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const button = useSelector((state) => state.cardButton.cardButton);
  function handleDelete() {
    deleteBook(`${book.id}`);
    dispatch(removeBook(book.id));
  }
  return (
    <div className="card shadow-lg rounded-5 h-100">
      <div className="row">
        <div className="col-md-4">
          <img
            src={book.img}
            className="card-img-top book-image rounded-3 h-100"
            alt={book.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column ">
            <h4 className="card-title fw-bold">{book.title}</h4>
            <p className="card-text text-muted">
              ✍️ <strong className="text-black">{book.author}</strong>
            </p>
            <p className="card-text">
              <strong>Tür:</strong> {book.genre}
            </p>
            <p className="card-text">
              <strong>Yıl:</strong> {book.publicYear}
            </p>
            <p className="card-text text-truncate">{book.description}</p>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              <button
                className={`btn btn-red card-btn ${button}`}
                onClick={handleDelete}
              >
                Sil
              </button>
              <NavLink
                to={`/book-detail/${book.id}`}
                className="btn btn-orange card-btn"
              >
                <i className="bi bi-eye"></i> İncele
              </NavLink>
              <NavLink
                to={`/update/${book.id}`}
                className={`btn btn-blue card-btn ${button}`}
              >
                Edit
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
