import Modal from "react-bootstrap/Modal";
import Form from "../EditForm";
function EditModal({ show, handleClose, postItem, handleEdit, handleAddPost }) {
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
          handleAddPost={handleAddPost}
        />
      </Modal.Body>
    </Modal>
  );
}

export default EditModal;
