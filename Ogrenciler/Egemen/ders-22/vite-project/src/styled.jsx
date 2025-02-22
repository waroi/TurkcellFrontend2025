import styled from "styled-components";

// İlk buton
export const Button1 = styled.button`
  background-color: red;
  color: white;
  font-size: ${(props) => props.size || "20px"};
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

// İkinci buton (miras alarak)
export const Button2 = styled(Button1)`
  background-color: blue;

  &:hover {
    background-color: darkblue;
  }
`;
