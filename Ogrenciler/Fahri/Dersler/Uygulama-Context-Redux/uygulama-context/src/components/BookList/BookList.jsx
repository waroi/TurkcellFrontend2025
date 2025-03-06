import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks, deleteBook } from "../../redux/slices/bookSlice";
import AddBook from "../AddBook/AddBook";
import FilteredBookList from "../FilteredBook";
import "./BookList.css";
import SignIn from "../SignIn";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const [searchText, setSearchText] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("http://localhost:5000/books");
      const data = await response.json();
      dispatch(setBooks(data));
    };
    fetchBooks();
  }, [dispatch]);

  const handleDeleteBook = async (id) => {
    await fetch(`http://localhost:5000/books/${id}`, { method: "DELETE" });
    dispatch(deleteBook(id));
  };

  return (
    <>
      <AddBook />
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
        <SignIn />
        <hr />
        <FilteredBookList
          filteredBooks={filteredBooks}
          handleDeleteBook={handleDeleteBook}
        />
      </div>
    </>
  );
};

export default BookList;
