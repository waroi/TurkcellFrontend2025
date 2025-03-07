import React from "react";
import { NavLink } from "react-router";
import { deleteBook } from "../../../firebase/dbController";

const Book = ({ book, handleDeleteBook }) => {
  return (
    <div className="card shadow-lg rounded-3 h-100">
      <div className="row">
        <div className="col-md-4">
          <img
            src={book.img}
            className="card-img-top book-image rounded-3 h-100"
            alt={book.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column">
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
            <div className="d-flex justify-content-between align-items-center">
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteBook(book.id)}
              >
                Sil
              </button>
              <NavLink to={`/${book.id}`} className="btn btn-outline-primary">
                <i className="bi bi-eye"></i> İncele
              </NavLink>
              <NavLink
                to={`/update/${book.id}`}
                className="btn btn-outline-info"
              >
                <i className="bi bi-search"></i> Edit
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
