import React, { useState } from "react";
import BookDetailsModal from "../BookDetailsModal";

export default function BookCard({ book }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const discountedPrice = book.price * 0.8;
  const defaultImage =
    "https://peoplesblog.co.in/sri-vedanta-swarajya-sangam/assets/img/books/default.jpeg";
  const imageSrc = book.coverImage || defaultImage;

  const discountPercentage = 20;

  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <div
          className="bookCard h-100 w-100 bg-white shadow-lg position-relative overflow-hidden cursor-pointer"
          onClick={handleShowModal}
          style={{ cursor: "pointer" }}
        >
          {/* discount */}
          <div className="position-absolute top-0 start-0 m-2 z-1">
            <span className="badge bg-danger rounded-pill px-2 py-1 shadow-sm">
              {discountPercentage}% OFF
            </span>
          </div>

          {/* category */}
          <div className="position-absolute top-0 end-0 m-2 z-1">
            <span className="badge bg-dark bg-opacity-75 rounded-pill px-2 py-1">
              {book.category}
            </span>
          </div>

          {/* img ve overlay */}
          <div className="book-cover position-relative overflow-hidden">
            <div className="book-cover-overlay position-absolute h-100 w-100 z-1 t-0"></div>
            <img
              src={imageSrc}
              alt={`Cover of ${book.title}`}
              className="object-fit-cover w-100 h-100"
              onError={(e) => (e.target.src = defaultImage)}
            />

            {/* detail button */}
            <div className="action-buttons position-absolute w-100 d-flex justify-content-center gap-2">
              <button
                className="btn btn-sm btn-light rounded-circle shadow"
                onClick={() => {
                  handleShowModal();
                }}
              >
                <i className="bi bi-eye"></i>
              </button>
            </div>
          </div>

          {/* book detail */}
          <div className="book-details p-3">
            <h5 className="book-title fw-bold mb-1" title={book.title}>
              {book.title}
            </h5>
            <p className="book-author text-muted mb-2" title={book.author}>
              <i className="bi bi-person-fill text-secondary me-1 small"></i>
              {book.author}
            </p>

            {/* rate */}
            <div className="ratings mb-2">
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star text-muted"></i>
              <small className="text-muted ms-1">(4.0)</small>
            </div>

            {/* price */}
            <div className="d-flex justify-content-between align-items-center">
              <div className="book-pricing">
                <div className="d-flex align-items-center">
                  <span className="discounted-price fw-bold fs-5 text-orange me-2">
                    {Math.round(discountedPrice)}₺
                  </span>
                  <span className="original-price text-secondary text-decoration-line-through small">
                    {book.price}₺
                  </span>
                </div>
              </div>

              {/* stock  */}
              <div className="stock-status small text-success">
                <i className="bi bi-check-circle-fill me-1"></i>
                In stock
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Details Modal */}
      <BookDetailsModal
        show={showModal}
        handleClose={handleCloseModal}
        book={book}
      />
    </>
  );
}
