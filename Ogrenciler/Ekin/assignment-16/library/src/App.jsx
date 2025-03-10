import { useSelector, useDispatch } from "react-redux";
import { addBook } from "./redux/slices/librarySlice";
import modal from "./modal";

import { Container, Button } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

export default function App() {
  const { setModal } = modal();
  const dispatch = useDispatch();

  const { user, books } = useSelector((state) => state.library);

  return (
    <>
      <Navigation />
      <main className="mb-5">
        {user ? (
          <>
            <Container className="d-flex justify-content-center mb-5">
              <Button
                className="text-white"
                onClick={() => {
                  setModal({
                    show: true,
                    mode: "add",
                    action: (book) => dispatch(addBook(book)),
                  });
                }}
              >
                <i className="fa-solid fa-plus"></i> Add Book
              </Button>
            </Container>
            <Container>
              {books && books.length ? (
                books.map((book) => <Card key={book.id} book={book} />)
              ) : (
                <center className="py-5 opacity-25">
                  <i className="fa-solid fa-face-frown-open fs-1 mb-3"></i>
                  <p className="fs-5 fw-bold">There are no books here.</p>
                </center>
              )}
            </Container>
          </>
        ) : (
          <Container>
            <center className="py-5 opacity-25">
              <i className="fa-solid fa-book fs-1 mb-3"></i>
              <p className="fs-5 fw-bold">
                Please register to access the library.
              </p>
            </center>
          </Container>
        )}
      </main>

      <Footer />
      <Modal />
    </>
  );
}
