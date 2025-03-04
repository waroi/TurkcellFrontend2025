import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/slices/booksSlice";
import { Modal, Button, Form } from "react-bootstrap";

const BookModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    handleClose();
    setTitle("");
    setAuthor("");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Yeni Kitap Ekle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Kitap Adı</Form.Label>
            <Form.Control
              type="text"
              placeholder="Kitap adını girin"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Yazar</Form.Label>
            <Form.Control
              type="text"
              placeholder="Yazar adını girin"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Ekle
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BookModal;
