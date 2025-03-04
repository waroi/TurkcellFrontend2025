import { useState, useRef, useEffect } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";

export default function ModalComponent({ show, setShow, modalProperties }) {
  const id = useRef();
  const name = useRef();
  const author = useRef();
  const desc = useRef();
  const image = useRef();

  const { mode, book, action } = modalProperties;

  useEffect(() => {
    if (mode != "delete" && book) {
      id.current.value = book.id;
      name.current.value = book.name;
      author.current.value = book.author;
      desc.current.value = book.desc;
      image.current.value = book.image;
    }
  }, [modalProperties]);

  // useEffect(() => {
  //   if (mode != "delete" && book) {
  //     console.log(book);
  //     id.current.value = book.id;
  //     name.current.value = book.name;
  //     author.current.value = book.author;
  //     desc.current.value = book.desc;
  //     image.current.value = book.image;
  //   }
  // }, []);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {mode == "add"
            ? "Add Book"
            : mode == "edit"
            ? "Edit Book"
            : "Delete Book"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {mode == "delete" ? (
          "Are you sure you want to delete this book?"
        ) : (
          <>
            {" "}
            <input type="hidden" ref={id} />
            <FloatingLabel label="Name" className="mb-3">
              <Form.Control type="text" placeholder="" ref={name} />
            </FloatingLabel>
            <FloatingLabel label="Author" className="mb-3">
              <Form.Control type="text" placeholder="" ref={author} />
            </FloatingLabel>
            <FloatingLabel label="Description" className="mb-3">
              <Form.Control as="textarea" placeholder="" ref={desc} />
            </FloatingLabel>
            <FloatingLabel label="Image URL" className="mb-3">
              <Form.Control type="text" placeholder="" ref={image} />
            </FloatingLabel>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            if (mode == "edit")
              action({
                id: id.current.value,
                name: name.current.value,
                author: author.current.value,
                desc: desc.current.value,
                image: image.current.value,
              });
            else if (mode == "add")
              action({
                name: name.current.value,
                author: author.current.value,
                desc: desc.current.value,
                image: image.current.value,
              });
            else action();

            setShow(false);
          }}
        >
          {mode == "delete" ? "Delete" : "Save"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
