import React from "react";
import { useParams } from "react-router"; 
import books from "../db/books";

const DetailsPage = () => {
    const { id } = useParams();
    const book = books.find((b) => b.id === Number(id)); // id'yi Number'a çevirdik

    if (!book) {
        return <h2>Kitap bulunamadı.</h2>;
    }

    return (
        <div className="container mt-4">
            <h2>{book.title}</h2>
            <img src={book.posterUrl} alt={book.title} className="img-fluid mb-3" />
            <p><strong>Yazar:</strong> {book.author}</p>
            <p><strong>Yıl:</strong> {book.releaseDate}</p>
            <p><strong>Kategori:</strong> {book.category}</p>
            <p>{book.description}</p>
        </div>
    );
};

export default DetailsPage;
