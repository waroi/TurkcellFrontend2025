import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook, deleteBook } from "../redux/slice/booksSlice";
import BookCard from "../components/BookCard";

const HomePage = () => {
    const dispatch = useDispatch();
    const { books, filter } = useSelector((state) => state.books);
    const [showForm, setShowForm] = useState(false); 

    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        year: "",
        posterUrl: "",
        description: "",
        category: ""
    });

    const handleAddBook = () => {
        if (!newBook.title || !newBook.author || !newBook.year || !newBook.posterUrl || !newBook.description || !newBook.category) {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        const bookToAdd = {
            ...newBook,
            id: Date.now()
        };

        dispatch(addBook(bookToAdd));

        setNewBook({
            title: "",
            author: "",
            year: "",
            posterUrl: "",
            description: "",
            category: ""
        });

        setShowForm(false); 
    };

    const filteredBooks = books
        .filter((book) => book.title.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) =>
            sort === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        );

    return (
        <div className="container mt-4">
            <h2 className="mb-4">📚 Kitaplar</h2>

            <button
                className="btn btn-primary mb-3"
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? "➖ Formu Kapat" : "➕ Yeni Kitap Ekle"}
            </button>

            {showForm && (
                <div className="mb-4 p-4 rounded shadow-sm">
                    <h4 className="mb-3">📚 Yeni Kitap Ekle</h4>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Kitap Adı"
                                value={newBook.title}
                                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Yazar"
                                value={newBook.author}
                                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Yıl"
                                value={newBook.year}
                                onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
                            />
                        </div>
                        <div className="col-md-8 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Afiş URL"
                                value={newBook.posterUrl}
                                onChange={(e) => setNewBook({ ...newBook, posterUrl: e.target.value })}
                            />
                        </div>
                        <div className="col-md-12 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Açıklama"
                                value={newBook.description}
                                onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Kategori"
                                value={newBook.category}
                                onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
                            />
                        </div>
                        <div className="col-md-6 mb-3 d-flex align-items-center">
                            <button className="btn btn-success w-100" onClick={handleAddBook}>
                                📖 Kitap Ekle
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="row">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <div className="col-md-4 mb-4" key={book.id}>
                            <BookCard book={book} onDelete={() => dispatch(deleteBook(book.id))} />
                        </div>
                    ))
                ) : (
                    <p className="text-center">📭 Aradığınız kriterlere uygun kitap bulunamadı.</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;
