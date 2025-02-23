import Dropdown from "react-bootstrap/Dropdown";

function Sort() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="">Last Updated</Dropdown.Item>
        <Dropdown.Item href="">Name</Dropdown.Item>
        <Dropdown.Item href="">Stars</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Sort;
