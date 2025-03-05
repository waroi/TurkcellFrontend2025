import { useSelector, useDispatch } from "react-redux";
import { addBook } from "./redux/slices/librarySlice";
import { setModal } from "./redux/slices/modalSlice";

import { Container, Button } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Card from "./components/Card";
import Modal from "./components/Modal";

export default function App() {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.library.books);

  return (
    <>
      <Navigation />
      <Container className="d-flex justify-content-center mb-3">
        <Button
          onClick={() => {
            dispatch(
              setModal({
                show: true,
                mode: "add",
                action: (book) => dispatch(addBook(book)),
              })
            );
          }}
        >
          <i className="fa-solid fa-plus"></i> Add Book
        </Button>
      </Container>
      <main>
        <Container>
          {books?.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </Container>
      </main>
      <Modal />
    </>
  );
}
