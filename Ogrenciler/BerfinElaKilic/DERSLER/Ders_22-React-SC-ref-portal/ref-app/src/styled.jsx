import styled from "styled-components";

export const Button1 = styled.button`
    background-color: red;
    color: white;
    font-size: 20px;
    padding: 10px 20px;
    border: none;
    margin: 5px;
    border-radius: 5px;
`;
export const Button2 = styled(Button1)`
background-color: blue;
&:hover{
    background-color: darkblue;
}`;