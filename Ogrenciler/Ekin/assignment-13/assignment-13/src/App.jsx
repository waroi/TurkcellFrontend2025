import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  const Button1 = styled.button`
    background-color: red;
    font-size: ${30}px; //? array func use ??????????????????????????????
  `;

  //? portal use case

  return (
    <>
      <Button1>Button</Button1>
    </>
  );
}

export default App;
