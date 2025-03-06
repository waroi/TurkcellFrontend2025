import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks, addBookToFirestore, deleteBookFromFirestore } from "../redux/slice/booksSlice";
import BookCard from "../components/BookCard";

const HomePage = () => {
    const dispatch = useDispatch();
    const { books, status } = useSelector((state) => state.books);
    const [newBook, setNewBook] = useState({ title: "", author: "", posterUrl: "", description: "",releaseDate: "",category: "" });

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    const handleAddBook = () => {
        dispatch(addBookToFirestore({ ...newBook }));
        setNewBook({ title: "", author: "", description: "",releaseDate: "",category: ""});
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">📚 Kitaplar</h2>

            <div className="mb-4 d-flex gap-2">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Kitap Adı"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="Yazar"
                    value={newBook.author}
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="URL"
                    value={newBook.posterUrl}
                    onChange={(e) => setNewBook({ ...newBook, posterUrl: e.target.value })}
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="Açıklama"
                    value={newBook.description}
                    onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                />
                <input
                    className="form-control"
                    type="number"
                    placeholder="Yıl"
                    value={newBook.releaseDate}
                    onChange={(e) => setNewBook({ ...newBook, releaseDate: e.target.value })}
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="Kategori"
                    value={newBook.category}
                    onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
                />
                <button className="btn btn-success" onClick={handleAddBook}>
                    Kitap Ekle
                </button>
            </div>

            {status === "loading" && <p>Kitaplar yükleniyor...</p>}

            <div className="row">
                {books.map((book) => (
                    <div className="col-md-4 mb-4" key={book.id}>
                        <BookCard book={book} onDelete={() => dispatch(deleteBookFromFirestore(book.id))} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
