import Button from "react-bootstrap/Button";
import { BlogService } from "../../services/BlogService";
export function SearchButton({ setCategory, categoryInput }) {
  function set() {
    setCategory(categoryInput);
  }
  return (
    <Button variant="success" type="button" className="m-2" onClick={set}>
      Ara
    </Button>
  );
}

export function ModalButton({ text, variant, onClickFunction }) {
  return (
    <Button className="m-2" variant={variant} onClick={onClickFunction}>
      {text}
    </Button>
  );
}
export function DeleteButton({ blogId, setTrigger }) {
  return (
    <Button
      type="button"
      variant="danger"
      onClick={() => {
        BlogService.delete(blogId);
        setTrigger(true);
      }}
    >
      Sil
    </Button>
  );
}
