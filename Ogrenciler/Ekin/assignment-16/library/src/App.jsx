import { useState } from "react";
import Navigation from "./components/Navigation";
import Card from "./components/Card";
import Modal from "./components/Modal";
import { Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addBook } from "./redux/slices/librarySlice";

export default function App() {
  const dispatch = useDispatch();
  const handleAddBook = (book) => dispatch(addBook(book));

  const [show, setShow] = useState(false);
  const [modalProperties, setModalProperties] = useState({
    mode: null,
    book: null,
    action: null,
  });

  const books = useSelector((state) => state.library.books);

  return (
    <>
      <Navigation />
      <Container className="d-flex justify-content-center mb-3">
        <Button
          onClick={() => {
            setModalProperties({
              mode: "add",
              action: handleAddBook,
            });

            setShow(true);
          }}
        >
          <i className="fa-solid fa-plus"></i> Add Book
        </Button>
      </Container>
      <main>
        <Container>
          {books?.map((book) => (
            <Card
              key={book.id}
              book={book}
              setShow={setShow}
              setModalProperties={setModalProperties}
            />
          ))}
        </Container>
      </main>
      <Modal
        show={show}
        setShow={setShow}
        modalProperties={modalProperties}
        // mode="edit"
        // book={{
        //   id: 8,
        //   name: "Computer Organization and Design",
        //   desc: "Computer architecture, processors, and assembly language.",
        //   author: "David A. Patterson, John L. Hennessy",
        //   image:
        //     "https://tse2.mm.bing.net/th?id=OIP.M-5VcD99nqGQNXhzaVc-YAHaJH&pid=Api",
        // }}
      />
    </>
  );
}
