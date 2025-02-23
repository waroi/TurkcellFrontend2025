import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { FaRegStar } from "react-icons/fa";
import { StyledSplitButton } from "./CustomButton";
import { useState } from "react";

function SplitButton() {
  const [starColor, setStarColor] = useState("#9198a1");

  return (
    <Dropdown as={ButtonGroup}>
      <StyledSplitButton
        onClick={() =>
          starColor === "#9198a1"
            ? setStarColor("yellow")
            : setStarColor("#9198a1")
        }
      >
        <FaRegStar fill={starColor} />
        {starColor === "#9198a1" ? "Star" : "Starred"}
      </StyledSplitButton>

      <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SplitButton;
