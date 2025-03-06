import React, { use, useEffect, useState } from "react";
import "../components/BookCard.css";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../redux/slices/bookSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth, db } from "../../firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";
import {
  faTrash,
  faPenToSquare,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const BookCard = ({ handleOpen, handleOpenDetail }) => {
  const [isFlippedCards, setFlippedCards] = useState(false);
  const [yayin, setYayin] = useState(null);
  const dispatch = useDispatch();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const BooksFromStore = useSelector((state) => state.book.books);
  const [difference, setDifference] = useState([]);
  const userRef = collection(db, "admins");


  useEffect(() => {
    getUserInfo();

    setFilteredBooks(BooksFromStore);

  }, []);

  useEffect(() => {
    if (yayin !== "all") {
      const filtered = BooksFromStore.filter((book) => book.yayin === yayin);
      setFilteredBooks(filtered);

    } else {
      setFilteredBooks(BooksFromStore);
    }
  }, [yayin, BooksFromStore]);

  useEffect(() => {
    if (filteredBooks.length > 0) {
      const diff = BooksFromStore.filter(book => !filteredBooks.some(fBook => fBook.id === book.id));
      setDifference(diff);
    } else {
      setDifference(BooksFromStore);
    }
  }, [filteredBooks, BooksFromStore]);



  const getUserInfo = async () => {
    try {
      const userSnap = await getDocs(userRef);

      if (!userSnap.empty && auth.currentUser) {
        userSnap.forEach((doc) => {
          const userID = doc.data().adminID;
          if (userID === auth.currentUser.uid) {
            console.log("Kullanıcı eşleşti, yayin alanı:", doc.data().yayin);
            setYayin(doc.data().yayin);
          }
        });
      } else {
        console.log("Belge bulunamadı veya kullanıcı giriş yapmamış!");
      }
    } catch (error) {
      console.error("Belge alınırken hata oluştu:", error);
    }
  };

  const handleFlip = (bookId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [bookId]: !prev[bookId],
    }));
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Bu kitabı silmek istediğinize emin misiniz?"
    );
    if (isConfirmed) {
      dispatch(deleteBook(id));
    }
  };

  return (
    <div className="bookcard">

      <div className="container flex-column py-4">
        <h1>Yayınevine Ait Kitaplar</h1>
        <div className="row w-100">
          {filteredBooks && filteredBooks.length > 0 ? (
            filteredBooks?.map((book) => (
              <div
                className="col container col-xl-3 col-lg-4 col-md-6 col-12 "
                key={book.id}
              >
                <div
                  className={`flip-card mb-3 ${isFlippedCards[book.id] ? "flipped" : ""
                    }`}
                >
                  <div
                    onClick={() => handleFlip(book.id)}
                    className="flip-card-inner"
                  >
                    <div className="flip-card-front">
                      <div className="card-content overflow-hidden">
                        <img
                          className=" img-fluid object-fit-cover book-img"
                          src={book.img_url}
                          alt={book.title}
                        />
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="card-content p-4">
                        <p className="d-flex justify-content-between mb-5">
                          <span className="badge px-3 py-2 rounded-pill fs-6 text-bg-orange">
                            {book?.category}
                          </span>
                          <span className="badge px-3 py-2 rounded-pill fs-6 text-bg-orange">
                            {book?.created_at.slice(0, 4)}
                          </span>
                        </p>
                        <h4 className="mb-3">{book.title}</h4>
                        <p className="mb-3">{book.author}</p>
                        <p className="mb-3">{book.description_short}</p>
                        <p className="mb-3">{book?.yayin}</p>

                        <div className="btns d-flex align-items-endbtns d-flex justify-content-center pt-5 mt-5">
                          <button
                            onClick={() => handleDelete(book.id)}
                            className="btn outlined-green rounded-circle me-2"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                          <button
                            onClick={() => handleOpen(book)}
                            className="btn outlined-green rounded-circle me-2"
                          >
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </button>
                          <button
                            onClick={() => handleOpenDetail(book)}
                            className="btn outlined-green rounded-circle"
                          >
                            <FontAwesomeIcon icon={faEye} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              Yayınevinize ait hiçbir kitap bulunamadı.
            </div>
          )}
        </div>
      </div>
      
      <div className="container flex-column py-4">
        <h1>Tüm Kitaplar</h1>
        <div className="overflow-auto" style={{ whiteSpace: "nowrap" }}>
          {difference && difference.length > 0 ? (
            difference.map((book) => (
              <div
                className="d-inline-block me-3"
                style={{ width: "300px" }}
                key={book.id}
              >
                <div className="flip-card mb-3">
                  <div
                    onClick={() => handleFlip(book.id)}
                    className={`flip-card-inner ${isFlippedCards[book.id] ? "flipped" : ""}`}
                  >
                    <div className="flip-card-front">
                      <div className="card-content overflow-hidden">
                        <img
                          className="img-fluid object-fit-cover book-img"
                          src={book.img_url}
                          alt={book.title}
                        />
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="card-content p-4">
                        <p className="d-flex justify-content-between mb-5">
                          <span className="badge px-3 py-2 rounded-pill fs-6 text-bg-orange">
                            {book?.category}
                          </span>
                          <span className="badge px-3 py-2 rounded-pill fs-6 text-bg-orange">
                            {book?.created_at.slice(0, 4)}
                          </span>
                        </p>
                        <h4 className="mb-3">{book.title}</h4>
                        <p className="mb-3">{book.author}</p>
                        <p className="mb-3">{book.description_short}</p>
                        <p className="mb-3">{book?.yayin}</p>
                        <div className="btns d-flex justify-content-center pt-5 mt-5">
                          {yayin === book.yayin && (
                            <button
                              onClick={() => handleDelete(book.id)}
                              className="btn outlined-green rounded-circle me-2"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          )}
                          <button
                            onClick={() => handleOpenDetail(book)}
                            className="btn outlined-green rounded-circle"
                          >
                            <FontAwesomeIcon icon={faEye} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">Yayınevinize ait hiçbir kitap bulunamadı.</div>
          )}
        </div>
      </div>

    </div>
  );
};

export default BookCard;
