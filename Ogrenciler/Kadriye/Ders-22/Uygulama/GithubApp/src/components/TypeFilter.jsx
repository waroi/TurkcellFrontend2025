import Dropdown from "react-bootstrap/Dropdown";

function TypeFilter({ repos }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Type
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {repos.map((repo, index) => {
          <Dropdown.Item href="">{repo.user_view_type}</Dropdown.Item>;
        })}
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default TypeFilter;
