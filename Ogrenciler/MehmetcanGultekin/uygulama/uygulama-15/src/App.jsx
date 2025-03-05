import { useState, useEffect } from "react";
import UpdateModal from "./components/UpdateModal";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook, updateBook } from "./redux/slices/bookSlice";
import "./App.css";
import BookCard from "./components/BookCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { books as booksData } from "../books.json";
import BookDetailsModal from "./components/BookDetailsModal";

function App() {
  const [openUpdateModal, setOpenUpdateModal] = useState(false); // Güncelleme modalı
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const booksFromStore = useSelector((state) => state.book.books);

  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteBook(id));

  const handleUpdateBook = (id, book) => {
    (book = { id, ...book }), dispatch(updateBook(book));
  };

  console.log("booksData", booksData);
  useEffect(() => {
    console.log("books:", booksFromStore);
  });
  useEffect(() => {
    if ("books" in localStorage) {
      return;
    } else {
      console.log("hello");
      localStorage.setItem("books", JSON.stringify(booksData));
    }
  }, []);
  const handleOpen = (book) => {
    setSelectedBook(book);
    setOpenUpdateModal(true);
  };
  const handleOpenDetail = (book) => {
    setSelectedBook(book);
    setOpenDetailModal(true);
  };
  const handleClose = () => {
    setSelectedBook(null);
    setOpenDetailModal(false);
    setOpenUpdateModal(false);
  };

  return (
    <>
      <Navbar />
      <UpdateModal
        isOpen={openUpdateModal}
        onClose={handleClose}
        book={selectedBook}
      />
      <BookCard handleOpen={handleOpen} handleOpenDetail={handleOpenDetail} />
      <BookDetailsModal
        isOpen={openDetailModal}
        onClose={handleClose}
        book={selectedBook}
      />

      <Footer />
    </>
  );
}

export default App;
