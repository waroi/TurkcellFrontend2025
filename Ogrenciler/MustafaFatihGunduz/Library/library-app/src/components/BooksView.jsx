import React from "react";
import { useSelector, useDispatch } from "react-redux";

const BooksView = () => {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  return (
    <div className="row container">
      {books.length > 0 ? (
        books.map((book) => (
          <div className="col-md-3">
            <div class="card mb-3">
              <img src={book.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{book.title}</h5>
                <p class="card-text">{book.description}</p>
                <p className="card-text">{book.author}</p>
                <p className="card-text">{book.releaseDate}</p>
                <p className="card-text">{book.page}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No book found</p>
      )}
    </div>
  );
};

export default BooksView;
