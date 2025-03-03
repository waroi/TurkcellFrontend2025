import styled from "styled-components";

export const Button1=styled.button`
   background-color:red;
   color:black;
   cursor:pointer;
   &:hover{
   background-color:darkgray;}
`;
export const Button2=styled(Button1)`
   background-color:blue;
   &:hover{
   background-color:darkgray;}
`;