import { useEffect } from "react";
import BookList from "../components/BookList/BookList";
import { getUserBooks } from "../../firebase/dbController";
import { clearBooks, setBooks } from "../redux/slices/bookSlice";
import { changeButton } from "../redux/slices/buttonSlice";
import { useDispatch, useSelector } from "react-redux";
import AddBook from "../components/AddBook/AddBook";
const EditorView = () => {
  const dispatch = useDispatch();
  const booksFirebase = useSelector((state) => state.books.books);
  dispatch(changeButton("d-block"));
  useEffect(() => {
    dispatch(clearBooks());
    const fetchBooks = async () => {
      const data = await getUserBooks();
      console.log(data);
      if (data) {
        dispatch(setBooks(data));
      }
    };
    fetchBooks();
  }, []);
  return (
    <>
      <AddBook />
      {booksFirebase.length == 0 ? (
        <p>Kitaplar yükleniyor veya bulunamadı</p>
      ) : (
        <BookList></BookList>
      )}
    </>
  );
};

export default EditorView;
