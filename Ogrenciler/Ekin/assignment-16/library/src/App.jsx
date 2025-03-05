import { useSelector, useDispatch } from "react-redux";
import { addBook } from "./redux/slices/librarySlice";
import { setModal } from "./redux/slices/modalSlice";

import { Container, Button } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

export default function App() {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.library.books);

  return (
    <>
      <Navigation />
      <Container className="d-flex justify-content-center mb-5">
        <Button
          className="text-white"
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
      <main className="mb-5">
        <Container>
          {books?.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </Container>
      </main>
      <Footer />
      <Modal />
    </>
  );
}
