import styled from"styled-components";
export const Button1=styled.button`
background-color: red;
color: white;
font-size: 1.5rem;
&:hover {
  background-color: darkred;
}
`;
export const Button2=styled(Button1)`
background-color: blue;
&:hover {
  background-color: green;
}
`;
