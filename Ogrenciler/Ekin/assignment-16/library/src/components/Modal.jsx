import { useRef, useEffect } from "react";

import { getBooks } from "../firebase";

import modal from "../modal";
import library from "../library";

import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";

export default function ModalComponent() {
  const { setModal, show, mode, book, action } = modal();
  const { setUser, setBooks } = library();

  const id = useRef();
  const title = useRef();
  const author = useRef();
  const description = useRef();
  const image = useRef();

  const email = useRef();
  const password = useRef();
  const remember = useRef();

  useEffect(() => {
    if (mode == "add") {
      id.current.value =
        title.current.value =
        author.current.value =
        description.current.value =
        image.current.value =
          "";
    } else if (mode == "edit" && book) {
      id.current.value = book.id;
      title.current.value = book.title;
      author.current.value = book.author;
      description.current.value = book.description;
      image.current.value = book.image;
    }
  }, [mode, book, action]);

  return (
    <Modal show={show} onHide={() => setModal({ show: false })} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {
            {
              add: "Add Book",
              edit: "Edit Book",
              delete: "Delete Book",
              register: "Register",
              login: "Login",
              logout: "Logout",
            }[mode]
          }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {mode == "add" || mode == "edit" ? (
          <>
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
        ) : mode == "delete" ? (
          "Are you sure you want to delete this book?"
        ) : mode == "register" || mode == "login" ? (
          <>
            <FloatingLabel label="Email" className="mb-3">
              <Form.Control type="email" placeholder="" ref={email} />
            </FloatingLabel>
            <FloatingLabel label="Password" className="mb-3">
              <Form.Control type="password" placeholder="" ref={password} />
            </FloatingLabel>
            {mode == "login" ? (
              <Form.Check type="switch" label="Remember Me" ref={remember} />
            ) : (
              ""
            )}
          </>
        ) : (
          "Are you sure you want to logout?"
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModal({ show: false })}>
          Close
        </Button>
        <Button
          variant="primary"
          className="text-white"
          onClick={() => {
            switch (mode) {
              case "add":
                action({
                  title: title.current.value,
                  author: author.current.value,
                  description: description.current.value,
                  image: image.current.value,
                });
                break;
              case "edit":
                action({
                  id: id.current.value,
                  title: title.current.value,
                  author: author.current.value,
                  description: description.current.value,
                  image: image.current.value,
                });
                break;
              case "delete":
                action();
                break;
              case "register":
                action(email.current.value, password.current.value).then(
                  (credential) => setUser(credential.user.uid)
                );
                break;
              case "login":
                action(
                  email.current.value,
                  password.current.value,
                  remember.current.checked
                ).then((credential) => {
                  setUser(credential.user.uid);
                  getBooks(credential.user.uid).then((books) =>
                    setBooks(books)
                  );
                });

                break;
              case "logout":
                action().then(() => {
                  setUser(null);
                  setBooks([]);
                });
                break;
            }

            setModal({ show: false });
          }}
        >
          {
            {
              add: "Save",
              edit: "Save",
              delete: "Delete",
              register: "Register",
              login: "Login",
              logout: "Logout",
            }[mode]
          }
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
