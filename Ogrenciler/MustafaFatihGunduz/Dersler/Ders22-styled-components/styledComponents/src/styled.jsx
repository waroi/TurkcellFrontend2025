import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "white")};
  color: ${(props) => (props.primary ? "white" : "blue")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

export const Button2 = styled(Button)`
  background-color: red;
  color: white;
`;
