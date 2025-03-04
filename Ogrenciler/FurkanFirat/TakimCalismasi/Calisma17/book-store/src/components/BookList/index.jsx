import React from "react";
import BookCard from "../BookCard";
import { useSelector } from "react-redux";

export default function BookList() {
  const { books, category } = useSelector((state) => state.books);

  const filteredBooks =
    category === "All Books"
      ? books
      : books.filter((book) => book.category === category);

  return (
    <div className="row">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
      ) : (
        <p>İlgili kategoriye ait kitap bulunamadı.</p>
      )}
    </div>
  );
}
