import { useRef, useState } from "react";
// import styled from "styled-components";
// import { Button1, Button2 } from "./styled";
import Portal from "./components/Portal";
import "./App.css";

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
  //     background-color: dark`;
  // const Button2 = styled(Button1)`
  //   background-color: blue;
  //   &:hover {
  //     background-color: darkblue;
  //   }
  // `;

  const divRef = useRef();
  const [portalTarget, setPortalTarget] = useState(document.body);
  const [textPortal, setTextPortal] = useState("body");
  const handlePortal = () => {
    setPortalTarget(divRef.current);
    setTextPortal("divRef");
    console.log(divRef.current.textContent);
  };
  return (
    <>
      <button onClick={() => handlePortal()}>Tıkla</button>
      {/* <button>Örnek Buton 1</button>
      <Button1 size="30">Örnek Buton 2</Button1>
      <Button2 size="50">Örnek Buton 3</Button2> */}
      <div ref={divRef}>Ref ile hedef div</div>
      <Portal target={portalTarget} text={textPortal} />
    </>
  );
}

export default App;
