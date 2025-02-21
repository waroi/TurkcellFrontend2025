import styled from "styled-components";

export const Button1 = styled.button`
    background-color: red;
    color: white;
    border radius: 15px;
    border: none;
    font-size: ${(props) => props.size || 20}px;
`;