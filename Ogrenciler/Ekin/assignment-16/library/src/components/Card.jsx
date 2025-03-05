import { useDispatch } from "react-redux";
import { editBook, deleteBook } from "../redux/slices/librarySlice";
import { setModal } from "../redux/slices/modalSlice";

import { Card, ButtonGroup, Button } from "react-bootstrap";

export default function CardComponent({ book }) {
  const dispatch = useDispatch();

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
              onClick={() =>
                dispatch(
                  setModal({
                    show: true,
                    mode: "edit",
                    book,
                    action: (book) => dispatch(editBook(book)),
                  })
                )
              }
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </Button>
            <Button
              variant="danger"
              onClick={() =>
                dispatch(
                  setModal({
                    show: true,
                    mode: "delete",
                    action: () => dispatch(deleteBook(book.id)),
                  })
                )
              }
            >
              <i className="fa-solid fa-trash-can"></i>
            </Button>
          </ButtonGroup>
        </div>
      </Card.Body>
    </Card>
  );
}
