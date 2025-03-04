import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook, deleteBook } from "../redux/slice/booksSlice";
import BookCard from "../components/BookCard";

const HomePage = () => {
    const dispatch = useDispatch();
    const { books, filter, sort } = useSelector((state) => state.books);

    const [newBook, setNewBook] = useState({ title: "", author: "", year: "" });

    const filteredBooks = books
        .filter((book) => book.title.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) =>
            sort === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        );

    return (
        <div className="container mt-4">
            <h2 className="mb-4">📚 Kitaplar</h2>

            <div className="mb-3 d-flex gap-2 align-items-center">
                <input
                    type="text"
                    placeholder="Kitap Adı"
                    className="form-control"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Yazar"
                    className="form-control"
                    value={newBook.author}
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Yıl"
                    className="form-control"
                    value={newBook.year}
                    onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
                />
                <button
                    className="btn btn-success"
                    onClick={() => dispatch(addBook({ ...newBook, id: Date.now() }))}
                >
                    ➕ Kitap Ekle
                </button>
            </div>

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
