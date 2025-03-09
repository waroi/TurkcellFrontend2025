import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilteredBookList from "../FilteredBook";
import "./BookList.css";

const BookList = () => {
  const [searchText, setSearchText] = useState("");
  const booksFirebase = useSelector((state) => state.books.books);
  const [filteredBooks, setFilteredBooks] = useState(booksFirebase);
  useEffect(() => {
    const books = booksFirebase.filter(
      (book) =>
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(books);
  }, [searchText, booksFirebase]);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control border-light shadow-sm my-4"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="🔍 Kitap Ara"
              />
              <span className="input-group-text bg-light border-light">
                <i className="bi bi-search text-muted"></i>
              </span>
            </div>
          </div>
        </div>

        {booksFirebase.length === 0 ? (
          <div className="text-center text-muted">
            <p>Ürün bulunamadı veya yükleniyor...</p>
          </div>
        ) : (
          <FilteredBookList filteredBooks={filteredBooks} />
        )}
      </div>
    </>
  );
};
export default BookList;
