import { useEffect } from "react";
import BookList from "../components/BookList/BookList";
import { getBooks } from "../../firebase/dbController";
import { setBooks } from "../redux/slices/bookSlice";
import { useDispatch, useSelector } from "react-redux";

const HomeView = () => {
  const dispatch = useDispatch();
  const booksFirebase = useSelector((state) => state.books.books);
  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      if (data) {
        dispatch(setBooks(data));
      }
    };
    fetchBooks();
  }, [dispatch]);

  return (
    <>
      {booksFirebase.length == 0 ? (
        <p>Kitaplar yükleniyor veya bulunamadı</p>
      ) : (
        <BookList key="home"></BookList>
      )}
    </>
  );
};

export default HomeView;
