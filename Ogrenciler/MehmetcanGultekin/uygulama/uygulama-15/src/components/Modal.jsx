import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/slices/bookSlice";
import "../App.css";
import { auth, db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
const Modal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [yayinevi, setYayinevi] = useState(null);
  useEffect(() => {
    if (isOpen && auth.currentUser) {
      const fetchYayinevi = async () => {
        const userRef = collection(db, "admins");
        const userSnap = await getDocs(userRef);
        userSnap.forEach((doc) => {
          if (doc.data().adminID === auth.currentUser.uid) {
            console.log("Firestore'dan alınan yayin:", doc.data().yayin);
            setYayinevi(doc.data().yayin);
          }
        });
      };
      fetchYayinevi();
    }
  }, [isOpen]);
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
    console.log("Dispatch edilecek yayin:", yayinevi);
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
        yayin: yayinevi,
      })
    );
    onClose();
  };
  if (!isOpen) return null;
  return (
    <>
      <div className="modal show" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content p-4 border-0 rounded-5 bg-lightPink">
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
                <input
                  className="form-control mb-2 rounded-pill"
                  name="title"
                  type="text"
                  placeholder="Kitap adı:"
                />
                <input
                  className="form-control mb-2 rounded-pill"
                  name="Kategori"
                  type="text"
                  placeholder="Kitap Kategori:"
                />
                <input
                  className="form-control mb-2 rounded-pill"
                  name="Kısa-Tanım"
                  type="text"
                  placeholder="Kitap Kısa Tanım:"
                />
                <input
                  className="form-control mb-2 rounded-pill"
                  name="Uzun-Tanım"
                  type="text"
                  placeholder="Kitap Uzun Tanım:"
                />
                <input
                  className="form-control mb-2 rounded-pill"
                  name="Img-Url"
                  type="text"
                  placeholder="Kitap Url:"
                />
                <input
                  className="form-control mb-2 rounded-pill"
                  name="Yazar"
                  type="text"
                  placeholder="Kitap Yazar:"
                />

                <input
                  className="form-control mb-2 rounded-pill"
                  name="created-at"
                  type="date"
                  placeholder="Kitap Tarih:"
                />
                <input
                  className="form-control mb-2 rounded-pill"
                  name="yayinevi"
                  type="text"
                  value={yayinevi || ""}
                  disabled
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                onClick={handleAddBook}
                type="submit"
                form="addBookForm"
                className="btn bg-pink rounded-pill"
              >
                Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
