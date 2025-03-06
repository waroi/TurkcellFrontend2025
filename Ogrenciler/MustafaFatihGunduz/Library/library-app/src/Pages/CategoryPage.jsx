import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import BooksView from "../components/BooksView";
import Footer from "../components/FooterView";
import NavbarView from "../components/NavbarView";

const CategoryPage = () => {
	const { category } = useParams();
	const books = useSelector((state) => state.book.books);
	const filteredBooks = books.filter((book) => book.category === category);

	return (
		<>
			<NavbarView />
			<BooksView category={category} />
			<Footer />
		</>
	);
};

export default CategoryPage;
