import { useRef, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../redux/slices/modalSlice";

import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";

export default function ModalComponent() {
  const dispatch = useDispatch();
  const hideModal = () => dispatch(setModal({ show: false }));

  const { show, mode, book, action } = useSelector((state) => state.modal);

  const id = useRef();
  const title = useRef();
  const author = useRef();
  const description = useRef();
  const image = useRef();

  useEffect(() => {
    if (mode != "delete" && book) {
      id.current.value = book.id;
      title.current.value = book.title;
      author.current.value = book.author;
      description.current.value = book.description;
      image.current.value = book.image;
    }
  }, [mode, book, action]);

  return (
    <Modal show={show} onHide={hideModal} centered>
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
              <Form.Control type="text" placeholder="" ref={title} />
            </FloatingLabel>
            <FloatingLabel label="Author" className="mb-3">
              <Form.Control type="text" placeholder="" ref={author} />
            </FloatingLabel>
            <FloatingLabel label="Description" className="mb-3">
              <Form.Control as="textarea" placeholder="" ref={description} />
            </FloatingLabel>
            <FloatingLabel label="Image URL" className="mb-3">
              <Form.Control type="text" placeholder="" ref={image} />
            </FloatingLabel>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Close
        </Button>
        <Button
          variant="primary"
          className="text-white"
          onClick={() => {
            if (mode == "edit")
              action({
                id: id.current.value,
                title: title.current.value,
                author: author.current.value,
                description: description.current.value,
                image: image.current.value,
              });
            else if (mode == "add")
              action({
                title: title.current.value,
                author: author.current.value,
                description: description.current.value,
                image: image.current.value,
              });
            else action();

            hideModal();
          }}
        >
          {mode == "delete" ? "Delete" : "Save"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
