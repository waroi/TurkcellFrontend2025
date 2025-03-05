import React from "react";
import Book from "../Book";

const FilteredBookList = ({ filteredBooks, handleDeleteBook }) => {
  return (
    <>
      <div className="row g-4">
        {filteredBooks.map((book) => (
          <div key={book.id} className="col-lg-4 col-md-6 col-sm-12">
            <Book book={book} handleDeleteBook={handleDeleteBook} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FilteredBookList;
