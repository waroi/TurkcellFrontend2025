import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { FaRegStar } from "react-icons/fa";
import { StyledSplitButton } from "./CustomButton";
import { useState } from "react";

function SplitButton() {
  const [starColor, setStarColor] = useState('white')

  return (
    <Dropdown as={ButtonGroup}>
      <StyledSplitButton onClick={() => starColor === 'white' ? setStarColor('yellow') : setStarColor('white')}><FaRegStar fill={starColor} /> STAR</StyledSplitButton>

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
