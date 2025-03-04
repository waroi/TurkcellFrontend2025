import { useState } from "react";
import Navigation from "./components/Navigation";
import Card from "./components/Card";
import Modal from "./components/Modal";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "./redux/slices/librarySlice";

export default function App() {
  const books = useSelector((state) => state.library.books);
  const dispatch = useDispatch();
  // const handleDelete = (id) => dispatch(deleteTodo(id));
  const handleAddBook = (book) => dispatch(addBook(book));

  console.log(books);

  return (
    <>
      <button onClick={() => handleAddBook({ id: "15", name: "TEST" })}>
        HELLO
      </button>
      {books.map((t, i) => (
        <p key={i}>{t.name}</p>
      ))}
      <Navigation />
      <main>
        <Container>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Container>
      </main>
      <Modal />
    </>
  );
}
