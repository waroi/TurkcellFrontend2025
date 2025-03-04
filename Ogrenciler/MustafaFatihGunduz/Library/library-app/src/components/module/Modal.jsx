import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook, updateBook } from "../../redux/slices/bookSlice";

const Modal = ({ editingBookId }) => {
  const dispatch = useDispatch();

  const selectedBook = useSelector((state) =>
    state.book.books.find((b) => b.id === editingBookId)
  );

  const initialState = {
    id: "",
    title: "",
    author: "",
    page: "",
    image: "",
    releaseDate: "",
    description: "",
  };

  const [bookData, setBookData] = useState(initialState);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (selectedBook) {
      setBookData(selectedBook);
      setIsEditing(true);
    } else {
      setBookData(initialState);
      setIsEditing(false);
    }
  }, [editingBookId, selectedBook]);

  useEffect(() => {
    const modalElement = document.getElementById("bookEvent");

    const handleModalClose = () => {
      setBookData(initialState);
      setIsEditing(false);
    };

    modalElement.addEventListener("hidden.bs.modal", handleModalClose);

    return () => {
      modalElement.removeEventListener("hidden.bs.modal", handleModalClose);
    };
  }, []);

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(updateBook(bookData));
    } else {
      dispatch(addBook(bookData));
    }
  };

  return (
    <div className="modal fade" id="bookEvent" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">
              {isEditing ? "Kitabı Güncelle" : "Kitap Ekle"}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="bookName" className="col-form-label">
                  Kitap İsmi:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bookName"
                  name="title"
                  value={bookData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bookDescription" className="col-form-label">
                  Kitap Açıklaması:
                </label>
                <textarea
                  id="bookDescription"
                  className="form-control"
                  rows="3"
                  name="description"
                  value={bookData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="bookAuthor" className="col-form-label">
                  Kitap Yazarı:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bookAuthor"
                  name="author"
                  value={bookData.author}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bookDate" className="col-form-control">
                  Kitap Çıkış Tarihi:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="bookDate"
                  name="releaseDate"
                  value={bookData.releaseDate}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bookImage" className="col-form-label">
                  Kitap Fotoğrafı:
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="bookImage"
                  name="image"
                  value={bookData.image}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bookPages" className="col-form-control">
                  Kitap Sayfa Sayısı:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="bookPages"
                  name="page"
                  value={bookData.page}
                  onChange={handleChange}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Kapat
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  {isEditing ? "Güncelle" : "Ekle"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
