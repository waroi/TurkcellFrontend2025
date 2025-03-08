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
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="🔍 Kitap Ara"
            />
          </div>
        </div>
        <hr />
        <h2 className="text-center">Kitap Listesi</h2>
        <hr />
        {booksFirebase.length === 0 ? (
          <p>Ürün bulunamadı veya yükleniyor...</p>
        ) : (
          <FilteredBookList filteredBooks={filteredBooks} />
        )}
      </div>
    </>
  );
};
export default BookList;
