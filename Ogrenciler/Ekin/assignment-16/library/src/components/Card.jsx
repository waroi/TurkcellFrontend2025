import { Card, ButtonGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editBook, deleteBook } from "../redux/slices/librarySlice";

export default function CardComponent({ book, setShow, setModalProperties }) {
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => dispatch(deleteBook(id));
  const handleEditBook = (book) => dispatch(editBook(book));

  return (
    <Card>
      <Card.Img variant="top" src={book.image} className="object-fit-cover" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{book.name}</Card.Title>
        <Card.Text>{book.desc}</Card.Text>
        <div className="w-100 d-flex justify-content-center mt-auto">
          <ButtonGroup>
            <Button
              variant="warning"
              onClick={() => {
                setModalProperties({
                  mode: "edit",
                  book,
                  action: handleEditBook,
                });

                setShow(true);
              }}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                setModalProperties({
                  mode: "delete",
                  book: null,
                  action: () => {
                    handleDeleteBook(book.id);
                    console.log("deleted");
                  },
                });

                setShow(true);
              }}
            >
              <i className="fa-solid fa-trash-can"></i>
            </Button>
          </ButtonGroup>
        </div>
      </Card.Body>
    </Card>
  );
}
