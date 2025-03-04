import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook, deleteBook, filterBooks, sortBooks } from "../redux/slice/booksSlice";
import BookCard from "../components/BookCard";

const HomePage = () => {
    const dispatch = useDispatch();
    const { books, filter, sort } = useSelector((state) => state.books);

    const [newBook, setNewBook] = useState({ title: "", author: "", year: "" });

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h2 className="mb-4">📚 Kitaplar</h2>

            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="Kitap Adı" 
                    value={newBook.title} 
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                />
                <input 
                    type="text" 
                    placeholder="Yazar" 
                    value={newBook.author} 
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                />
                <input 
                    type="number" 
                    placeholder="Yıl" 
                    value={newBook.year} 
                    onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
                />
                <button 
                    className="btn btn-success" 
                    onClick={() => dispatch(addBook({ ...newBook, id: Date.now() }))}
                >
                    Kitap Ekle
                </button>
            </div>

            {/* Filtre ve Sıralama */}
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="Kitap Ara..." 
                    onChange={(e) => dispatch(filterBooks(e.target.value))}
                />
                <button 
                    className="btn btn-primary ms-2" 
                    onClick={() => dispatch(sortBooks(sort === "asc" ? "desc" : "asc"))}
                >
                    {sort === "asc" ? "Z-A Sırala" : "A-Z Sırala"}
                </button>
            </div>

            {/* Kitap Listesi */}
            <div className="row">
                {filteredBooks.map((book) => (
                    <div className="col-md-4 mb-4" key={book.id}>
                        <BookCard book={book} onDelete={() => dispatch(deleteBook(book.id))} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
