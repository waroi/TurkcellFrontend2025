import styled from "styled-components";

export const Button1 = styled.button`
  background-color: red;
  color: white;
  fonst-size: ${(props) => props.size}px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: dark;
  }
`;
export const Button2 = styled(Button1)`
  background-color: blue;
  &:hover {
    background-color: lightblue;
  }
`;
