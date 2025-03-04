import React from "react";
import books from "../db/books"; 
import BookCard from "../components/BookCard";

const HomePage = () => {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">📚 Kitaplar</h2>
            <div className="row">
                {books.map((book) => (
                    <div className="col-md-4 mb-4" key={book.id}>
                        <BookCard book={book} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
