import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addSingleBookToFirestore,
  editSingleBookToFirestore,
} from "../../firebase/firebaseBooksService";
import { addBook, editBook } from "../../redux/slices/booksSlice";
import { useAuth } from "../../context/authContext";

export default function BookModal({ show, handleClose, initialBook }) {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();

  const [book, setBook] = useState(
    initialBook || {
      title: "",
      author: "",
      category: "",
      publisher: currentUser?.publisher || "",
      price: "",
      coverImage: "",
    }
  );

  const isSuperAdmin = currentUser?.role === "superadmin";

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSuperAdmin) {
      book.publisher = currentUser.publisher;
    }
    if (!initialBook) {
      const newBook = {
        ...book,
        id: Date.now(),
      };
      await addSingleBookToFirestore(newBook);
      dispatch(addBook(newBook));
    } else {
      await editSingleBookToFirestore(book);
      dispatch(
        editBook({
          id: book.id,
          updatedBook: book,
        })
      );
    }

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{initialBook ? "Edit Book" : "Add Book"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={book.category}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Publisher</Form.Label>
            <Form.Control
              type="text"
              name="publisher"
              value={book.publisher}
              onChange={handleChange}
              disabled={!isSuperAdmin}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price (₺)</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={book.price}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cover Image URL</Form.Label>
            <Form.Control
              type="text"
              name="coverImage"
              value={book.coverImage}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={book.description}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="d-flex justify-content-end mt-4">
            <Button
              variant="secondary"
              onClick={handleClose}
              className="me-2 bg-"
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="bg-orange">
              {initialBook ? "Save Changes" : "Add Book"}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
