import { useState, useEffect } from "react";
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
  const [books, setBooks] = useState([]);
  console.log("booksData", booksData);
  useEffect(() => {
    setBooks(booksData);
    const booksFromStorage = JSON.parse(localStorage.getItem("books"));
  }, []);
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <>
      <Navbar />
      <BookCard />
      <Footer />
    </>
  );
}

export default App;
