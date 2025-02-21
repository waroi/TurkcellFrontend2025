import { Button1, Button2 } from "./styled";
import {useRef, useState} from "react";
import Portal from "./Components/Portal";
import "./App.css";

function App() {
  // const Button1 = styled.button`
  // background-color: red;
  // color: white;`;
  // const Button2 = styled(Button1)`
  // background-color: blue;
  // `;
  const divRef = useRef();
  const[portalTarget, setPortalTarget] = useState(document.body);
  const [textPortal, setTextPortal] = useState("body");
  const handlePortal = () => {
    setPortalTarget(divRef.current);
    setTextPortal = ("divRef");
    console.log(divRef.current.textContent);
  }


  return (
    <>
    <button onClick={() => handlePortal()}>Tıkla</button>
      {/* <button>Örnek Button</button>
      <Button1>Örnek Button 1</Button1>
      <Button2>Örnek Button 2</Button2> */}
      <div ref={divRef}>Ref ile hedef div</div>
      <Portal target= {portalTarget} text= {textPortal} />
    </>
  );
}

export default App;
