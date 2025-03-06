import React from "react";
import NavbarView from "../components/NavbarView";
import Footer from "../components/FooterView";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import BooksView from "../components/BooksView";

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
