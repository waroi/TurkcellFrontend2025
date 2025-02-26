import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const StyledInput = styled(Form.Control)`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 5px solid rgba(255, 191, 0, 0.5);
  &:hover {
    border-color: #ced4da;
    outline: none;
    box-shadow: 0px 0px 5px rgba(21, 21, 20, 0.5);
  }
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 15px;
  border-radius: 8px;
`;
