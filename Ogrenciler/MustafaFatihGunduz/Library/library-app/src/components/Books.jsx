import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Books = () => {
  const books = useSelector((state) => state.merhaba.books);
  const dispatch = useDispatch();
  return (
    <div>
      {books.length > 0 ? (
        books.map((book) => (
          <li key={book.id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.page}</p>
            <p>{book.releaseDate}</p>
            <p>{book.description}</p>
          </li>
        ))
      ) : (
        <p>No book found</p>
      )}
    </div>
  );
};

export default Books;
