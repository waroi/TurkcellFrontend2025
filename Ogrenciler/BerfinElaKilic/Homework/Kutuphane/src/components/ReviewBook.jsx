import { useSelector } from "react-redux";

const ReviewBook = () => {
  const book = useSelector((state) => state.book.book);

  return (
    <div
      className="modal fade"
      id={`reviewModal-${book.id}`}
      tabIndex="-1"
      aria-labelledby={`reviewModalLabel-${book.id}`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`reviewModalLabel-${book.id}`}>
              Kitap: {book.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body text-start">
            <div className="text-center">
              <img
                src={book.imgUrl}
                alt={book.title}
                className="img-fluid rounded shadow-sm mb-3"
                style={{ maxWidth: "200px" }}
              />
            </div>

            <p>
              <strong>Yazar:</strong> {book.author}
            </p>
            <p>
              <strong>Yıl:</strong> {book.year}
            </p>
            <p>
              <strong>Detay:</strong> {book.description}
            </p>
            <p>
              <strong>Baskı Sayısı:</strong> {book.printCount}
            </p>
            <p>
              <strong>Hamur Tipi:</strong> {book.paperType}
            </p>
            <p>
              <strong>Boyut:</strong> {book.size}
            </p>

            <p>
              <strong>Resim Linki:</strong>{" "}
              <a href={book.imgUrl} target="_blank" rel="noopener noreferrer">
                {book.imgUrl}
              </a>
            </p>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary px-4 py-2 rounded-3"
              data-bs-dismiss="modal"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBook;
