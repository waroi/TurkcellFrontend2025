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

/* 1-book data oluştur
2-local storage at
3-local storage çek, redux 'a ekle
4- gerekli yerlerden redux tan çek ve güncelle
 */

function App() {
  const [openUpdateModal, setOpenUpdateModal] = useState(false); // Güncelleme modalı
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const booksFromStore = useSelector((state) => state.book.books);
  const filteredBookFromStore = useSelector(
    (state) => state.filteredBook.books
  );
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteBook(id));

  const handleUpdateBook = (id, book) => {
    (book = { id, ...book }), dispatch(updateBook(book));
  };

  console.log("booksData", booksData);
  useEffect(() => {
    console.log("books:", booksFromStore);
    console.log("filtered books", filteredBookFromStore);
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
      {/* <button onClick={() => handleFilterBook("fantastik")}>
        Fantastik olanları getir
      </button>
      <button onClick={() => handleClearFilters()}>Filtreleri Temizle</button>
      <button onClick={() => handleSortbyStringAZ("title")}>Sırala a-z</button>
      <button
        onClick={() => {
          handleSortbyStringZA("title");
        }}
      >
        Sırala z-a
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
      <button onClick={() => handleDelete("1")}>sil</button> */}

      <Footer />
    </>
  );
}

export default App;
