import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getBook } from "../../../firebase/dbController";
const BookDetail = () => {
  const { id } = useParams();
  const [booksFirebase, setBooksFirebase] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBook(id);
      if (data) {
        setBooksFirebase(data);
      }
    };
    fetchBooks();
  }, [id]);

  if (!booksFirebase)
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
      </div>
    );

  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded-5 border-0 bg-light">
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img
              src={booksFirebase.img}
              className="card-img-top rounded-3 book-image"
              alt={booksFirebase.title}
            />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-between p-4">
            <div>
              <h1 className="card-title fw-bold mb-3">{booksFirebase.title}</h1>
              <p className="card-text mb-2 fs-3">
                <strong>Yazar:</strong> {booksFirebase.author}
              </p>
              <p className="card-text mb-2 fs-3">
                <strong>Tür:</strong> {booksFirebase.genre}
              </p>
              <p className="card-text mb-2 fs-3">
                <strong>Yıl:</strong> {booksFirebase.publicYear}
              </p>
              <p className="card-text mb-3 fs-3">
                {booksFirebase?.description?.substring(0, 350) + "..."}
              </p>
            </div>

            <div className="d-flex justify-content-between">
              <button
                className="btn btn-red card-btn w-25"
                onClick={() => navigate(-1)} // bir sayfa geri yönlendirdik
              >
                Geri Dön
              </button>
              <a
                href={`https://www.google.com/search?q=${booksFirebase.title}`}
                className="btn btn-blue card-btn w-25"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kitabı Ara
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
