import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLibrary } from "../redux/slice/librarySlice";
import Card from "../components/Card";
import Banner from "../components/Banner";

const HomeView = () => {
	const books = useSelector((state) => state.library.books);
	const dispatch = useDispatch();
	const getBooks = () => dispatch(getLibrary());

	useEffect(() => {
		getBooks();
	}, []);

	return (
		<>      
		<Banner/>
			<div className="row mx-lg-2 d-flex justify-content-center">
				{books.map((book, index) => (
					<div
						key={index}
						className="news-card mx-2 col-lg-3 new-item my-4 rounded col-md-4 col-sm-6 col-12"
					>
						<Card book={book} />
					</div>
				))}
			</div>
		</>
	);
};

export default HomeView;
