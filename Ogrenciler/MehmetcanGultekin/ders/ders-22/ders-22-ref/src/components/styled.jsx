import styled from "styled-components";

export const Button1 = styled.button`
    background-color: blue;
    font-size: ${(props)=> props.size}px;    
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
    `;
export const Button2 = styled(Button1)`
    background- : red;
    margin-right: 0;
    `;

    //font-size: ${(props)=> props.size || 20}px;  //default value