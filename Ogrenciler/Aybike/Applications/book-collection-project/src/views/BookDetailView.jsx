import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getBookById } from "../redux/slice/librarySlice"; 

const BookDetailView = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const getBook = (id) => dispatch(getBookById(id));
  const item = useSelector((state) => state.library.book);

  useEffect(() => {
	if(bookId){
    getBook(bookId)}
  }, [bookId]);

	return (
		<>
		<h1>BOOK DETAIL VIEW</h1>
			<h3>{item.title}</h3>
			<img src={item.posterUrl} alt="poster" />
			<hr />
			<p>{item.description}</p>
			<p>
				{item.author} | {item.publishedYear}
			</p>
			<p>{item.genre}</p>
		</>
	);
};

export default BookDetailView;
