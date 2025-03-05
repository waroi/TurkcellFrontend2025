import React, { useState } from "react";
import "../components/BookCard.css";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../redux/slices/bookSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const BookCard = ({ handleOpen, handleOpenDetail }) => {
  const [isFlippedCards, setFlippedCards] = useState(false);
  const BooksFromStore = useSelector((state) => state.book.books);
  const handleFlip = (bookId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [bookId]: !prev[bookId],
    }));
  };
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteBook(id));

  return (
    <div className="bookcard">
      <div className="container py-4">
        <div className="row w-100">
          {BooksFromStore?.map((book) => (
            <div className="col col-lg-3 " key={book.id}>
              <div
                className={`flip-card mb-3 ${
                  isFlippedCards[book.id] ? "flipped" : ""
                }`}
              >
                <div
                  onClick={() => handleFlip(book.id)}
                  className="flip-card-inner"
                >
                  <div className="flip-card-front">
                    <div className="card-content">
                      <img
                        className="w-100 h-100 img-fluid object-fit-cover book-img"
                        src={book.img_url}
                        alt={book.title}
                      />
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="card-content p-4">
                      <p className="d-flex justify-content-between mb-5">
                        <span className="badge px-3 py-2 rounded-pill fs-6 text-bg-orange">
                          {book.category}
                        </span>
                        <span className="badge px-3 py-2 rounded-pill fs-6 text-bg-orange">
                          {book.created_at.slice(0, 4)}
                        </span>
                      </p>
                      <h4 className="mb-3">{book.title}</h4>
                      <p className="mb-3">{book.author}</p>
                      <p className="mb-3">{book.description_short}</p>

                      <div className="btns d-flex align-items-endbtns d-flex justify-content-center pt-5 mt-5">
                        <button
                          onClick={() => handleDelete(book.id)}
                          className="btn outlined-green rounded-circle me-2"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <button
                          onClick={() => handleOpen(book)}
                          className="btn outlined-green rounded-circle me-2"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button
                          onClick={() => handleOpenDetail(book)}
                          className="btn outlined-green rounded-circle"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
