import { Modal, Button } from "react-bootstrap";
import useTestModal from "../../store/useTestModal";

const TestModal = ({ show, handleClose, questions, onComplete }) => {
  const { answers, handleAnswer, handleSubmit } = useTestModal(
    questions,
    onComplete
  );

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton />
      <Modal.Body>
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <h5>{question.question}</h5>
            {question.options.map((option) => (
              <div key={option.id} className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name={`question-${index}`}
                  id={`${index}-${option.id}`}
                  onChange={() => handleAnswer(index, option.id)}
                  checked={answers[index] === option.id} //! radio buttonun seçili olup olmadığını kontrol ediyoruz
                />
                <label
                  className="form-check-label"
                  htmlFor={`${index}-${option.id}`} //! 1-A, 2-B gibi çıktı üretiyor ve benzersiz
                >
                  {option.text}
                </label>
              </div>
            ))}
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          İptal
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Testi Bitir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TestModal;
