import { useRef, useState } from "react";
import "./App.css";
// import styled from "styled-components";
// import {Button1, Button2  } from "./styled";
import {  } from "./Components/Portal";


function App() {
  
  // const Button1 = styled.button`
  //   background-color: red;
  //   color: white;
  //   font-size: 1.5rem;
  //   padding: 10px 20px;
  //   border: none;
  //   border-radius: 5px;
  //   cursor: pointer;

  //   &:hover {
  //     background-color: darkred;
  //   }
  // `;

  // const Button2 = styled(Button1)`
  //   background-color: blue;

  //   &:hover {
  //     background-color: darkblue;
  //   }
  // `;


  const ref = useRef();
  const [portalTarget,setPortalTarget] = useState(document.body);
  const[textPortal,setTexPortal] = useState("body");
  const handlePortal = () => {
    setPortalTarget(divRef.current);
    setTexPortal = "divRef";
    console.log(divRef.current.textContent);
  };
  return (
    <>
      <button onClick={() => handlePortal()}>TIKLA</button>
      {/* <Button2 size="30">Örnek Button 3</Button2> */}
      <div ref={divRef}>Ref ile hedef div </div>
      <portal target={portalTarget} text={textPortal}>

      </>
  );
}

export default App;
