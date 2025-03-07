import { useParams } from "react-router";
import BooksView from "../components/BooksView";
import Footer from "../components/FooterView";
import NavbarView from "../components/NavbarView";

const CategoryPage = () => {
	const { publishing } = useParams();

	return (
		<>
			<NavbarView />
			<BooksView publishing={publishing} />
			<Footer />
		</>
	);
};

export default CategoryPage;
