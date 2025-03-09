import Book from "../Book";

const FilteredBookList = ({ filteredBooks }) => {
  return (
    <>
      <div className="row g-4">
        {filteredBooks.map((book) => (
          <div key={book.id} className=" col-md-6 col-sm-12">
            <Book book={book} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FilteredBookList;
