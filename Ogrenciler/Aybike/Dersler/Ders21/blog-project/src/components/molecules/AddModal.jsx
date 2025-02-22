import { useState } from "react";
import { ModalButton } from "../atoms/button";
import { InfoInput } from "../atoms/input";
import Modal from "react-bootstrap/Modal";
import { BlogService } from "../../services/BlogService";
import Blog from "../../models/Blog";

function AddModal({ setTrigger }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [creator, setCreator] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  function handleAdd() {
    if (handleInputs()) {
      BlogService.post(
        new Blog(title, image, content, creator, date, category)
      );
      setTrigger(true);
      handleClose();
      clearInputs();
    } else {
      alert("İstenilen bilgilerin hepsini giriniz");
    }
  }
  function handleInputs() {
    if (
      [title, image, content, creator, date, category].some(
        (value) => value == ""
      )
    ) {
      return false;
    } else {
      return true;
    }
  }
  function clearInputs() {
    setTitle("");
    setImage("");
    setContent("");
    setCreator("");
    setDate("");
    setCategory("");
  }
  return (
    <>
      <ModalButton
        text="Blog Ekle"
        variant="primary"
        onClickFunction={handleShow}
      ></ModalButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yeni Blog Ekle</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InfoInput
            value={title}
            placeholder="Blog adını yazınız"
            onchangeFunction={setTitle}
          ></InfoInput>
          <InfoInput
            value={image}
            placeholder="Blog resim bağlantısını yazınız"
            onchangeFunction={setImage}
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
            onClickFunction={handleAdd}
          ></ModalButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
