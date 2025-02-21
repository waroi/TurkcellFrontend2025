// import styled from "styled-components";
import { Button1, Button2} from './styled';
import {useRef, useState} from "react";
import Portal from './Components/Portal'
import './App.css'


function App() {
//   const Button1 = styled.button`
//     background-color : red;
//     color: white;
//     padding : 10px 20px;
//     border : none;
//     border-radius : 5px;
//     cursor: pointer;
//     &:hover{
//     background-color : orange;
//     }
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
    // <>
    // styled için örnek
    //   <button>Örnek Buton 1</button>
    //   <Button1>Örnek</Button1>
    //   <Button2>Örnek</Button2>
    // </>
    <>
    <button onClick={() => handlePortal}>Tıkla</button>
    <div ref={divRef}>Ref ile hedef div</div>
    <Portal target={portalTarget} text={textPortal}/>
  </>
  )
}

export default App
