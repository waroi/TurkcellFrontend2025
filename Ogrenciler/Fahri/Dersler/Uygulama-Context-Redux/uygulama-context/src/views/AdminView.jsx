import { useEffect, useState } from "react";
import BookList from "../components/BookList/BookList";
import { getBooks } from "../../firebase/dbController";
import { clearBooks, setBooks } from "../redux/slices/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import AddBook from "../components/AddBook/AddBook";
import { auth } from "../../firebase/firebase";
import { toggleButton } from "../redux/slices/buttonSlice";
const EditorView = () => {
  const dispatch = useDispatch();
  const [userAuth, setUserAuth] = useState();
  const booksFirebase = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(clearBooks());
    const fetchBooks = async () => {
      const data = await getBooks();
      console.log(data);
      if (data) {
        dispatch(setBooks(data));
        dispatch(toggleButton());
      }
    };
    fetchBooks();
  }, [userAuth, dispatch]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUserAuth(userAuth);
      } else {
        setUserAuth(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {userAuth ? (
        <>
          <AddBook />
          {booksFirebase.length == 0 ? (
            <p>Kitaplar yükleniyor veya bulunamadı</p>
          ) : (
            <BookList></BookList>
          )}
        </>
      ) : (
        <p>Lütfen Giriş Yapınız</p>
      )}
    </>
  );
};

export default EditorView;
