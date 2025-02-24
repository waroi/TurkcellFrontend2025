import './App.css'
import styled from 'styled-components'
import { Button1, Button2 } from './components/Button/styled'
import { useRef, useState } from 'react'
import Portal from './components/Portal'

function App() {
  // const Button3 = styled.button`
  // background-color:red;
  // color:white;
  // font-size:${props => props.size || '50'}px;
  // padding: 10px 20px;
  // border:none;
  // border-radius:5px;
  // cursor:pointer;
  // &:hover {
  //     background-color:dark
  // }`

  const divRef = useRef()
  const [portalTarget, setPortalTarget] = useState(document.body)
  const [textPortal, setTextPortal] = useState('Body')
  const handlePortal = () => {
    setPortalTarget(divRef.current)
    setTextPortal('Div')
    console.log(divRef.current)
  }
  return (
    <>
      <button onClick={() => handlePortal()}>Tıkla</button>

      <div ref={divRef}></div>

      <Portal target={portalTarget} text={textPortal} />

      {/* <button>Örnek Buton 1</button> */}
      {/* <Button1 size='30'>Buton1</Button1> */}
      {/* <Button2>Buton2</Button2>
      <Button3>Buton3</Button3> */}
    </>
  )
}

export default App
