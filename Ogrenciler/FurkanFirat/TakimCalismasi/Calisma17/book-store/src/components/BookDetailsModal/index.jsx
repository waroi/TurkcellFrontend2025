import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function BookDetailsModal({ show, handleClose, book }) {
  if (!book) return null;

  const discountedPrice = book.price * 0.8;
  const defaultImage =
    "https://peoplesblog.co.in/sri-vedanta-swarajya-sangam/assets/img/books/default.jpeg";
  const imageSrc = book.coverImage || defaultImage;

  return (
    <Modal show={show} onHide={handleClose} centered size="xl">
      <Modal.Header closeButton className="border-0 bg-white">
        <Modal.Title className="text-orange fw-bold">{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className="row g-0">
          <div className="col-md-4 position-relative">
            <div className="book-cover-modal position-relative h-100">
              <div className="position-absolute top-0 start-0 m-2 z-1">
                <span className="badge bg-danger rounded-pill px-2 py-1 shadow-sm">
                  20% OFF
                </span>
              </div>
              <img
                src={imageSrc}
                alt={`${book.title}`}
                className="img-fluid h-100 w-100 object-fit-cover"
                onError={(e) => (e.target.src = defaultImage)}
              />
            </div>
          </div>

          <div className="col-md-8">
            <div className="p-4">
              <div className="d-flex justify-content-between mb-3">
                <h4 className="fw-bold">{book.title}</h4>
                <span className="badge bg-dark bg-opacity-75 rounded-pill px-3 py-2 d-flex align-items-center">
                  {book.category}
                </span>
              </div>

              <p className="text-muted mb-3">
                <i className="bi bi-person-fill text-orange me-2"></i>
                <span className="fw-semibold">{book.author}</span>
              </p>

              <div className="ratings mb-3">
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star text-muted"></i>
                <span className="ms-2 text-muted">(4.0)</span>
              </div>

              <div className="book-pricing mb-4">
                <div className="d-flex align-items-center">
                  <span className="discounted-price fw-bold fs-4 text-orange me-3">
                    {Math.round(discountedPrice)}₺
                  </span>
                  <span className="original-price text-secondary text-decoration-line-through">
                    {book.price}₺
                  </span>
                </div>
              </div>

              <div className="stock-status mb-4">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <span className="text-success fw-semibold">In Stock</span>
              </div>

              <div className="description mb-4">
                <h5 className="fw-bold mb-2">Description</h5>
                <p className="text-muted">
                  {book.description ||
                    "This book captivates readers with its engaging narrative and rich content, taking them on a thrilling journey through its compelling storyline. With its diverse themes, it offers both a thought-provoking and enjoyable reading experience."}
                </p>
              </div>

              <div className="book-details-table mb-4">
                <h5 className="fw-bold mb-2">Book Details</h5>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td className="bg-light fw-semibold">Author</td>
                      <td>{book.author || "Not available"}</td>
                    </tr>
                    <tr>
                      <td className="bg-light fw-semibold">Publisher</td>
                      <td>{book.publisher || "Not available"}</td>
                    </tr>
                    <tr>
                      <td className="bg-light fw-semibold">Publication Year</td>
                      <td>{book.releaseDate || "Not available"}</td>
                    </tr>
                    <tr>
                      <td className="bg-light fw-semibold">Category</td>
                      <td>{book.category || "Not available"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0 bg-white">
        <Button
          variant="secondary"
          className="rounded-pill"
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
