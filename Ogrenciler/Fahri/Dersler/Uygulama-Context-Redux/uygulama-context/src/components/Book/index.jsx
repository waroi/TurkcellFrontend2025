import React from "react";
import { NavLink } from "react-router";

const Book = ({ book, handleDeleteBook }) => {
  return (
    <div className="card shadow-lg rounded-3 h-100">
      <img
        src={book.img}
        className="card-img-top book-image rounded-3"
        alt={book.title}
      />
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
            onClick={() => handleDeleteBook(book.id)}
          >
            Sil
          </button>
          <NavLink to={`/books/${book.id}`} className="btn btn-outline-primary">
            <i className="bi bi-eye"></i> İncele
          </NavLink>
          <a
            href={`https://www.google.com/search?q=${book.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-info"
          >
            <i className="bi bi-search"></i> Kitabı Ara
          </a>
        </div>
      </div>
    </div>
  );
};

export default Book;
