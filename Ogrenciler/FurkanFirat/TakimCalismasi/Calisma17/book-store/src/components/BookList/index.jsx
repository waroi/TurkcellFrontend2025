import React, { useEffect } from "react";
import BookCard from "../BookCard";
import { useDispatch, useSelector } from "react-redux";
import {
  loadBooks,
  setCategory,
  setSearchTerm,
} from "../../redux/slices/booksSlice";
import { Form, Spinner } from "react-bootstrap";

export default function BookList() {
  const dispatch = useDispatch();
  const { books, category, searchTerm, loading, error } = useSelector(
    (state) => state.books
  );

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  const filteredBooks = books
    .filter((book) =>
      category !== "All Books" ? book.category === category : true
    )
    .filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="book-list-container p-5 rounded-3 bg-white shadow-md mb-5">
      <div className="search-container mb-4 position-relative">
        <div className="input-group shadow-lg rounded-pill overflow-hidden">
          <span className="input-group-text bg-white border-0">
            <i className="bi bi-search text-orange"></i>
          </span>
          <Form.Control
            type="text"
            name="title"
            value={searchTerm}
            placeholder="Search by title..."
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            className="border-0 py-2"
            required
          />
          {searchTerm && (
            <button
              className="btn btn-link border-0 text-muted"
              onClick={() => dispatch(setSearchTerm(""))}
            >
              <i className="bi bi-x-circle"></i>
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="warning" className="me-2" />
          <span className="text-muted">Loading books...</span>
        </div>
      ) : error ? (
        <div className="alert alert-danger shadow-sm rounded-3">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          Error: {error}
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="text-muted mb-0">
              {filteredBooks.length} book found
            </h5>
          </div>

          {filteredBooks.length > 0 ? (
            <div className="row book-grid g-3">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <i className="bi bi-search fs-1 text-muted mb-3 d-block"></i>
              <h4>No matches found</h4>
              <button
                className="btn btn-orange rounded-pill mt-2"
                onClick={() => {
                  dispatch(setSearchTerm(""));
                  dispatch(setCategory("All Books"));
                }}
              >
                <i className="bi bi-arrow-counterclockwise me-1"></i>
                Reset Filters
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
