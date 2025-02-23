import Dropdown from "react-bootstrap/Dropdown";

function Sort({ onSort }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="" onClick={() => onSort("updated")}>Last Updated</Dropdown.Item>
        <Dropdown.Item href="" onClick={() => onSort("name")}>Name</Dropdown.Item>
        <Dropdown.Item href="" onClick={() => onSort("stars")}>Stars</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Sort;
