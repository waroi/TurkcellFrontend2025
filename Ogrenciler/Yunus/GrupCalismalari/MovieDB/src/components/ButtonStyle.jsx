import styled from "styled-components";
import Button from "react-bootstrap/esm/Button";

export const ButtonStyled = styled(Button)`
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: #ced4da;
  }
`;
