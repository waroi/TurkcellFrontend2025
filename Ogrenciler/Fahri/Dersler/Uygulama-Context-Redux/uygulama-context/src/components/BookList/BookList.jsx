import { useState, useEffect, use } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddBook from "../AddBook/AddBook";
import FilteredBookList from "../FilteredBook";
import "./BookList.css";
import { useParams } from "react-router";
import { getUserBooks } from "../../../firebase/dbController";
import { setBooks } from "../../redux/slices/bookSlice";
const BookList = () => {
  const dispatch = useDispatch();
  const booksFirebase = useSelector((state) => state.books.books);
  const [searchText, setSearchText] = useState("");
  // const [booksFirebase, setBooksFirebase] = useState([]);
  const { id } = useParams();

  const filteredBooks = booksFirebase.filter(
    (book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getUserBooks();
      if (data) {
        dispatch(setBooks(data));
        // setBooksFirebase(data);
      }
    };
    fetchBooks();
  }, [id]);

  return (
    <>
      <AddBook
      // booksFirebase={booksFirebase}
      // setBooksFirebase={setBooksFirebase}
      />
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
          <FilteredBookList filteredBooks={booksFirebase} />
        )}
      </div>
    </>
  );
};
export default BookList;
