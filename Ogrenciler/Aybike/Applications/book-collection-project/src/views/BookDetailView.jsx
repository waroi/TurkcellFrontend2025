import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getBookById } from "../redux/slice/librarySlice";

const BookDetailView = () => {
	const { bookId } = useParams();
	const dispatch = useDispatch();
	const getBook = (id) => dispatch(getBookById(id));
	const item = useSelector((state) => state.library.book);

	useEffect(() => {
		if (bookId) {
			getBook(bookId);
		}
	}, [bookId]);

	return (
		<>
  <div className="container m-5">
    <div className="row">
      <div className="col-lg-6 col-sm-12 mb-4">
        <img className="detail-img img-fluid" src={item.posterUrl} alt="poster" />
      </div>
      <div className="col-lg-6 col-sm-12 text-start">
        <h2>{item.title}</h2>
        <hr />
        <p>{item.description}</p>
        <p>
          {item.author} | {item.publishedYear}
        </p>
        <p>Genre: {item.genre}</p>
      </div>
    </div>
  </div>
		</>
	);
};

export default BookDetailView;
