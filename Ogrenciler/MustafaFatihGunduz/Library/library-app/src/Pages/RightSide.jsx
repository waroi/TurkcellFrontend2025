import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";

const RightSide = () => {
  const { theme } = useTheme();
  const { books } = useSelector((state) => state.book);
  const [book, setBook] = useState([]);
  useEffect(() => {
    getOneBook();
  }, []);
  const getOneBook = () => {
    const book = books.slice(5, 6);
    setBook(book);
  };
  return (
    <aside className={`right-side ${theme === "light" ? "light" : "dark"} `}>
      <div className="container py-5 px-3 mt-5 mb-5 d-flex flex-column align-items-center">
        {book.length > 0 ? (
          book.map((oneBook) => (
            <div className="book d-flex flex-column align-items-center gap-3" key={oneBook.id}>
              <h4>{oneBook.title}</h4>
              <img src={oneBook.image} alt="" />
              <h6><span>{oneBook.author}</span><span className="px-2">○</span><span>{oneBook.releaseDate}</span></h6>
              <div className="star">
                <span><i className="fa fa-star checked"></i></span>
                <span><i className="fa fa-star checked"></i></span>
                <span><i className="fa fa-star checked"></i></span>
                <span><i className="fa fa-star checked"></i></span>
                <span><i className="fa fa-star checked"></i></span>
              </div>
              <p>{oneBook.description}</p>
            </div>
          ))
        ) : (
          <div className="text-center">
            <p>Kitap bulunamadı</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default RightSide;
