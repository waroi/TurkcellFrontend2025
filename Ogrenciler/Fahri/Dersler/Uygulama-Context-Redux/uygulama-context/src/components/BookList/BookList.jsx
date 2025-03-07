import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks, deleteBook } from "../../redux/slices/bookSlice";
import AddBook from "../AddBook/AddBook";
import FilteredBookList from "../FilteredBook";
import "./BookList.css";
import { useParams } from "react-router";
import { getUserBooks } from "../../../firebase/dbController";
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
  const { id } = useParams();
  const [booksFirebase, setBooksFirebase] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getUserBooks();
      if (data) {
        setBooksFirebase(data);
      }
      console.log("firabasee", data);
      console.log("kitap listesi", booksFirebase);
    };
    fetchBooks();
  }, [id]);
  useEffect(() => {
    console.log("Firebase'den gelen kitaplar:", booksFirebase);
  }, [booksFirebase]);
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
        <hr />
        {booksFirebase.length === 0 ? (
          <p>Ürün bulunamadı veya yükleniyor...</p>
        ) : (
          <FilteredBookList
            filteredBooks={booksFirebase}
          />
        )}

      </div>
    </>
  );
};
export default BookList;