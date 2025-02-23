import { useRef , useState } from 'react'
import './App.css' 

function App() {
   const divRef = useRef()
   const [portalTarget ,setPortalTarget] = useState(document.body)
   const [textPortal, setTextPortal] = useState("Body")
   const handlePortal = () => {
      setPortalTarget(divRef.current)
      setTextPortal = "divRef"
      console.log(divRef.current.textContent)
    }
  return (
    <>
      <button onClick={()=> handlePortal()}>tıkla</button>
      <div ref={divRef}>ref şle hedef div</div>
      <Portal target={portalTarget} text={textPortal}/>
    </>
  )
}

export default App
