import {useRef,useState} from 'react';
import "./App.css";
import {Button1,Button2} from "./styled";
import Portal from "./components/Portal";

function App() {
  const divRef=useRef();
  const [textPortal,setTextPortal]=useState("body");
  const[portalTarget,setPortalTarget]=useState(document.body);
  const handlePortal=()=>{
    setPortalTarget(divRef.current);
    setTextPortal("divRef");
    console.log(divRef.current.textContent);
  };
  return (
    <>
      <button onClick={()=>handlePortal()}>Tıkla</button>
      <div ref={divRef}>Ref ile hedef div</div>
      <Portal target={portalTarget} text={textPortal}/>
    </>
  );
}

export default App;


