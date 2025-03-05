import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await fetch(`http://localhost:5000/books/${id}`);
      const data = await response.json();
      setBook(data);
    };
    fetchBookDetails();
  }, [id]);

  if (!book)
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
      </div>
    );

  return (
    <div className="container mt-4">
      <div className="card shadow-lg rounded-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={book.img}
              className="card-img-top rounded-3"
              alt={book.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title fw-bold text-primary">{book.title}</h1>
              <p className="card-text mb-2 fs-3">
                <strong>Yazar:</strong>
                {book.author}
                <span className="text-dark"></span>
              </p>
              <p className="card-text mb-2 fs-3">
                <strong>Tür:</strong> {book.genre}
              </p>
              <p className="card-text mb-2 fs-3">
                <strong>Yıl:</strong> {book.publicYear}
              </p>
              <p className="card-text mb-3 fs-3">{book.description}</p>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate(-1)} // bir sayfa geri yönlendirdik
                >
                  Geri Dön
                </button>
                <a
                  href={`https://www.google.com/search?q=${book.title}`}
                  className="btn btn-info"
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
    </div>
  );
};

export default BookDetail;
