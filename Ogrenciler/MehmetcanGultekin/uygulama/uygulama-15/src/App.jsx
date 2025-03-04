import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addBook,
  deleteBook,
  updateBook,
  filterBooks,
  sortBooksByDate,
  sortBooksByString,
} from "./redux/slices/bookSlice";
import "./App.css";
import BookCard from "./components/BookCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { books as booksData } from "../books.json";

/* 1-book data oluştur
2-local storage at
3-local storage çek, redux 'a ekle
4- gerekli yerlerden redux tan çek ve güncelle
 */

function App() {
  const booksFromStore = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteBook(id));
  const handleAddBook = (book) => dispatch(addBook(book));
  const handleFilterBook = (category) => dispatch(filterBooks(category));
  const handleUpdateBook = (id, book) => {
    (book = { id, ...book }), dispatch(updateBook(book));
  };

  console.log("from store", booksFromStore);
  console.log("booksData", booksData);

  useEffect(() => {
    if ("books" in localStorage) {
      return;
    } else {
      console.log("hello");
      localStorage.setItem("books", JSON.stringify(booksData));
    }
  }, []);

  return (
    <>
      <button onClick={() => handleFilterBook("fantastic")}>
        Fantastik olanları getir
      </button>
      <button
        onClick={() =>
          handleAddBook({
            id: "1",
            author: "fhfgh",
            title: "Hfghfhfh",
            description: "fghfh",
            img_url: "https://example.com/hp1.jpg",
            created_at: "1997-06-26T00:00:00Z",
            category: "Fantastik",
          })
        }
      >
        ekle
      </button>
      <button
        onClick={() =>
          handleUpdateBook("1a2b3c4d", {
            author: "Ece",
          })
        }
      >
        Değiştir
      </button>
      <button onClick={() => handleDelete("1")}>sil</button>
      <Navbar />
      <BookCard />
      <Footer />
    </>
  );
}

export default App;
