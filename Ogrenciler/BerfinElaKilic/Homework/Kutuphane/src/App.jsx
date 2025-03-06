import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import { getBooks, registerUser } from "./services/Api";
import { useDispatch } from "react-redux";
import { addAllBook } from "./redux/slices/bookSlice";
import BookCard from "./components/BookCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0CyO2UECsZ5cGg4Yj3SUaMk8LoT8_tWI",
  authDomain: "book-c93d1.firebaseapp.com",
  projectId: "book-c93d1",
  storageBucket: "book-c93d1.firebasestorage.app",
  messagingSenderId: "219554700148",
  appId: "1:219554700148:web:c1a6ea2d3597c089712a21",
  measurementId: "G-CKK1JV38HJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      dispatch(addAllBook(data));
    };
    fetchBooks();
  }, []);

  return (
    <>
      <NavBar />

      <div className="container">
        <div className="row g-3">
          {books?.map((book) => (
            <BookCard key={self.crypto.randomUUID()} book={book} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
