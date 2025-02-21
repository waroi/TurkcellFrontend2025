import Modal from "react-bootstrap/Modal";
import Form from "../EditForm";
function EditModal({ show, handleClose, postItem, handleEdit }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          handleClose={handleClose}
          postItem={postItem}
          handleEdit={handleEdit}
        />
      </Modal.Body>
    </Modal>
  );
}

export default EditModal;
