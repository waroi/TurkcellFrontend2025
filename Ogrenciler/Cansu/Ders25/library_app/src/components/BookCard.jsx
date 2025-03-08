import React from 'react';

const BookCard = ({ title, author, description, image }) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{description}</p>
    </div>
  );
};

export default BookCard;
