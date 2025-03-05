import React from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/slices/bookSlice";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const dispatch = useDispatch();
  const handleAddBook = (event) => {
    event.preventDefault();
    const form = document.getElementById("addBookForm");
    const formData = new FormData(form);
    const title = formData.get("title").trim();
    const author = formData.get("Yazar").trim();
    const category = formData.get("Kategori").trim();
    const created_at = formData.get("created-at").trim();
    const description_short = formData.get("Kısa-Tanım").trim();
    const description_long = formData.get("Uzun-Tanım").trim();
    const img_url = formData.get("Img-Url").trim();

    if (!title || !author) return alert("Tüm alanları doldurun!");

    dispatch(
      addBook({
        id: Date.now(),
        title,
        author,
        category,
        created_at,
        description_short,
        description_long,
        img_url,
      })
    );
    onClose();
  };

  return (
    <>
      <div
        className={`modal ${isOpen ? "show" : ""}`}
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Kitap Ekle</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="addBookForm" onSubmit={handleAddBook}>
                <input name="title" type="text" placeholder="Kitap adı:" />
                <input
                  name="Kategori"
                  type="text"
                  placeholder="Kitap Kategori:"
                />
                <input
                  name="created-at"
                  type="date"
                  placeholder="Kitap Tarih:"
                />
                <input
                  name="Kısa-Tanım"
                  type="text"
                  placeholder="Kitap Kısa Tanım:"
                />
                <input
                  name="Uzun-Tanım"
                  type="text"
                  placeholder="Kitap Uzun Tanım:"
                />
                <input name="Img-Url" type="text" placeholder="Kitap Url:" />
                <input name="Yazar" type="text" placeholder="Kitap Yazar:" />
              </form>
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
                onClick={(e) => handleAddBook(e)}
                type="submit"
                form="addBookForm"
                className="btn btn-primary"
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
