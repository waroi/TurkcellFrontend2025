import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, searchBook, sortingBook } from "../redux/slices/bookSlice";
import Modal from "./module/Modal";
import { ThemeContext } from "../context/ThemeContext";

const BooksView = () => {
  const { books, keyword } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteBook(id));

  const [editingBookId, setEditingBookId] = useState(null);
  const openEditModal = (id) => {
    setEditingBookId(id);
    const modal = new bootstrap.Modal(document.getElementById("bookEvent"));
    modal.show();
  };
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };
  const filteredItems = books.filter((book) =>
    book.title.toLowerCase().includes((keyword || "").toLowerCase())
  );
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <div
        className={`${
          theme === "light" ? "bg-dark text-light" : "bg-white text-dark"
        }`}
      >
        <div className="container">
          <div className="d-flex gap-5 justify-content-center py-4">
            <select
              onChange={(e) => dispatch(sortingBook(e.target.value))}
              className="form-select"
            >
              <option value="asc"> Tarihe Gore Artan</option>
              <option value="desc">Tarihe Gore Azalan</option>
            </select>
            <input
              onChange={(e) => dispatch(searchBook(e.target.value))}
              type="text"
              className="form-control"
              placeholder="Ara..."
            />
          </div>
          <div id="books" className="row ">
            {filteredItems.length > 0 ? (
              filteredItems.map((book) => (
                <div key={book.id} className="col-lg-3 col-md-6 col-sm-12 pb-5">
                  <div
                    className={`card mb-3 h-100 ${
                      theme === "light"
                        ? "bg-secondary text-light"
                        : "bg-white text-dark"
                    }`}
                  >
                    <img src={book.image} className="card-img-top" alt="..." />
                    <div className="card-body w-100">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="card-text">{book.description}</p>
                      <p className="card-text">{book.author}</p>
                      <p className="card-text">
                        {formatDate(book.releaseDate)}
                      </p>
                      <p className="card-text">{book.page}</p>
                      <div className="btn-group gap-2 w-100">
                        <button
                          className="btn btn-warning w-50"
                          onClick={() => openEditModal(book.id)}
                        >
                          Düzenle
                        </button>
                        <button
                          className="btn btn-danger w-50"
                          onClick={() => handleDelete(book.id)}
                        >
                          Sil
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No book found</p>
            )}
            <Modal
              editingBookId={editingBookId}
              setEditingBookId={setEditingBookId}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksView;
