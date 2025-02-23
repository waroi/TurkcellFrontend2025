import styled from "styled-components";

export const Button1 = styled.button`
  background-color: red;
  color: white;
  font-size: ${(props) => {
    props.size || 20;
  }}px;
  padding: 10px 10px;
`;

export const Button2 = styled(Button1)`
  background-color: blue;
`;
