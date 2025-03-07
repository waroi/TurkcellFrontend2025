import React from "react";
import BookCard from "../components/BookCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getBooks } from "../services/Api";
import { useDispatch } from "react-redux";
import { addAllBook } from "../redux/slices/bookSlice";
import NavBar from "../components/NavBar";

const Home = () => {
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
      <NavBar isAdmin={false}/>

      <div className="container">
        <div className="row g-3">
          {books?.map((book) => (
            <BookCard
              key={self.crypto.randomUUID()}
              book={book}
              isAdmin={false}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
