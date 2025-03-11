import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, searchBook, sortingBook } from "../redux/slices/bookSlice";
import Modal from "./module/Modal";

const BooksView = ({ publishing }) => {
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

  const filteredBooks = publishing
    ? books.filter((book) => book.publishing === publishing)
    : books;

  const filteredItems = filteredBooks.filter((book) =>
    book.title.toLowerCase().includes((keyword || "").toLowerCase())
  );

  return (
    <>
      <div id="books">
        <h3 className="mx-5 py-2">Kitaplar</h3>
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
          <div id="books" className="row">
            {filteredItems.length > 0 ? (
              filteredItems.map((book) => (
                <div key={book.id} className="col-lg-3 col-md-6 col-sm-12 pb-5">
                  <div className="h-100 d-flex flex-column border rounded shadow-sm p-3">
                    <div className="card-img-div">
                      <img
                        src={book.image}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text">{book.description}</p>
                      </div>
                      <p className="card-text fst-italic">
                        Yazar: {book.author}
                      </p>
                      <p className="card-text">
                        Çıkış Tarihi: {formatDate(book.releaseDate)}
                      </p>
                      <p className="card-text">Kategori: {book.category}</p>
                      <p className="card-text">Yayınevi: {book.publishing}</p>
                      <p className="card-text">Sayfa Sayısı: {book.page}</p>
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
