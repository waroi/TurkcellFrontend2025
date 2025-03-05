import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router"; 

const DetailsPage = ({ onDelete }) => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
        console.log("LocalStorage'dan alınan kitaplar:", storedBooks);

        const foundBook = storedBooks.find((b) => b.id === Number(id));

        if (foundBook) {
            setBook(foundBook);
        }
    }, [id]);

    const handleDelete = () => {
        const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
        const updatedBooks = storedBooks.filter((b) => b.id !== Number(id));
        
        localStorage.setItem("books", JSON.stringify(updatedBooks));

        navigate("/");

        if (onDelete) {
            onDelete(id);
        }
    };

    if (!book) {
        return <h2>Kitap bulunamadı.</h2>;
    }

    return (
        <div className="container mt-4">
            <h2>{book.title}</h2>
            <img src={book.posterUrl} alt={book.title} className="img-fluid mb-3" />
            <p><strong>Yazar:</strong> {book.author}</p>
            <p><strong>Yıl:</strong> {book.year}</p>
            <p><strong>Kategori:</strong> {book.category}</p>
            <p>{book.description}</p>
            <button className="btn btn-danger" onClick={handleDelete}>
                🗑 Sil
            </button>
        </div>
    );
};

export default DetailsPage;
