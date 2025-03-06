import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/slice/booksSlice";

const AddBook = () => {
    const dispatch = useDispatch();
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

    return (
        <div className="container mt-4">
            <button className="btn btn-primary mb-3" onClick={() => setShowForm(!showForm)}>
                {showForm ? "➖ Formu Kapat" : "➕ Yeni Kitap Ekle"}
            </button>

            {showForm && (
                <div className="card p-4 shadow-sm">
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
                            <textarea
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
                        <div className="col-md-6 mb-3">
                            <button className="btn btn-success w-100" onClick={handleAddBook}>
                                📖 Kitap Ekle
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddBook;
