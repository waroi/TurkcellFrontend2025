import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const MyModal = ({
  easyCount,
  mediumCount,
  hardCount,
  setEasyCount,
  setMediumCount,
  setHardCount,
  handleSubmit,
  setShowModal,
  showModal,
}) => {
  const handleModalClose = () => setShowModal(false);

  return (
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header>
        <Modal.Title>Test Hazırlayın ☄️</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="easyCount">Kolay Soru Adedi:</label>
            <input
              min="0"
              max="5"
              type="number"
              className="form-control"
              id="easyCount"
              value={easyCount}
              onChange={(e) => setEasyCount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mediumCount">Orta Soru Adedi:</label>
            <input
              min="0"
              max="5"
              type="number"
              className="form-control"
              id="mediumCount"
              value={mediumCount}
              onChange={(e) => setMediumCount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="hardCount">Zor Soru Adedi:</label>
            <input
              min="0"
              max="5"
              type="number"
              className="form-control"
              id="hardCount"
              value={hardCount}
              onChange={(e) => setHardCount(e.target.value)}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Gönder
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
