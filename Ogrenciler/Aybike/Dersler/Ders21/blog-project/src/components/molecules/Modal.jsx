import { useState } from "react";
import { ModalButton } from "../atoms/button";
import { InfoInput } from "../atoms/input";
import Modal from "react-bootstrap/Modal";
import { BlogService } from "../../services/BlogService";
import Blog from "../../models/Blog";

function DetailModal({ blog, setTrigger }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [creator, setCreator] = useState(blog.creator);
  const [date, setDate] = useState(blog.date);
  const [category, setCategory] = useState(blog.category);
  function handleUpdate() {
    if (handleInputs()) {
      BlogService.put(
        new Blog(title, blog.image, content, creator, date, category, blog.id)
      );
      setTrigger(true);
      handleClose();
    } else {
      alert("İstenilen bilgilerin hepsini giriniz");
    }
  }
  function handleInputs() {
    if (
      [title, content, creator, date, category].some((value) => value == "")
    ) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <>
      <ModalButton
        text="Detayları Gör"
        variant="primary"
        onClickFunction={handleShow}
      ></ModalButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{blog.title}</Modal.Title>
        </Modal.Header>
        <img src={blog.image} alt={blog.title} />
        <Modal.Body>
          <InfoInput
            value={title}
            placeholder="Blog adını yazınız"
            onchangeFunction={setTitle}
          ></InfoInput>
          <InfoInput
            placeholder="Blog açıklamasını yazınız"
            as="textarea"
            row={5}
            onchangeFunction={setContent}
            value={content}
          ></InfoInput>
          <small className="text-body-secondary">
            Yazar{" "}
            <InfoInput
              placeholder="Blog yazarını yazınız"
              onchangeFunction={setCreator}
              value={creator}
            ></InfoInput>{" "}
            Oluşturulma Tarihi{" "}
            <InfoInput
              value={date}
              onchangeFunction={setDate}
              type="date"
            ></InfoInput>
          </small>
          <br />
          <small className="text-body-secondary">
            Kategori:{" "}
            <InfoInput
              value={category}
              placeholder="Blog kategorisini yazınız"
              onchangeFunction={setCategory}
            ></InfoInput>
          </small>
        </Modal.Body>
        <Modal.Footer>
          <ModalButton
            text="Kaydet"
            variant="primary"
            onClickFunction={handleUpdate}
          ></ModalButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DetailModal;
