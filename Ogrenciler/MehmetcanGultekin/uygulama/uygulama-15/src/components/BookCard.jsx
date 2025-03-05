import React, { useState } from "react";
import "../components/BookCard.css";
import "../App.css";
import { useSelector,useDispatch } from "react-redux";
import { deleteBook } from "../redux/slices/bookSlice";


const BookCard = ({handleOpen}) => {
  
  const [isFlippedCards, setFlippedCards] = useState(false);
  const BooksFromStore = useSelector((state) => state.book.books);
  const handleFlip = (bookId) => {
    setFlippedCards(prev => ({
      ...prev,
      [bookId]: !prev[bookId]
    }));
  };
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteBook(id));



  return (
    <div className="bookcard">
      <div className="container py-4">
        <div className="row">
          {BooksFromStore?.map((book) => (
            <div className="col col-lg-3 "key={book.id}>
            <div className={`flip-card mb-3 ${isFlippedCards[book.id] ? "flipped" : ""}`}>
              <div onClick={()=>handleFlip(book.id)} className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-content">
                    <img
                        
                      className="w-100 h-100 img-fluid object-fit-cover book-img"
                      src={book.img_url}
                      alt={book.title}
                    />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-content p-3">
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <p>{book.description_short}</p>
                    <h5><span className="badge text-bg-secondary">{book.category}</span></h5>
                    <button onClick={() => handleDelete(book.id)}>sil</button>
                    <button onClick={()=> handleOpen(book)}>güncelle</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default BookCard;
