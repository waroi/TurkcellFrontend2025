import React from "react";

const BookCard = ({ book }) => {
    if (!book) {
        return <div>Yükleniyor...</div>;}
    return (
        <div className="card">
            <img src={book.posterUrl} className="card-img-top" alt={book.title} />
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Yazar: {book.author}</li>
                <li className="list-group-item">Yıl: {book.releaseDate}</li>
                <li className="list-group-item">Kategori: {book.category}</li>
                <li className="list-group-item">Yayınevi: {book.yayinevi}</li>
            </ul>
            <div className="card-body">
                <a href={`/books/${book.id}`} className="card-link">Detaylar</a>
            </div>
        </div>
    );
};

export default BookCard;
