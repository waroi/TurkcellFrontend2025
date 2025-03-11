import modal from "../modal";
import library from "../library";

import { Card, ButtonGroup, Button } from "react-bootstrap";

export default function CardComponent({ book }) {
  const { setModal } = modal();
  const { editBook, deleteBook } = library();

  return (
    <Card>
      <Card.Img variant="top" src={book.image} className="object-fit-cover" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{book.title}</Card.Title>
        <Card.Text className="fst-italic">{book.author}</Card.Text>
        <Card.Text>{book.description}</Card.Text>
        <div className="w-100 d-flex justify-content-end mt-auto">
          <ButtonGroup>
            <Button
              variant="warning"
              onClick={() =>
                setModal({
                  show: true,
                  mode: "edit",
                  book,
                  action: (book) => editBook(book),
                })
              }
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </Button>
            <Button
              variant="danger"
              className="text-white"
              onClick={() =>
                setModal({
                  show: true,
                  mode: "delete",
                  action: () => deleteBook(book.id),
                })
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
