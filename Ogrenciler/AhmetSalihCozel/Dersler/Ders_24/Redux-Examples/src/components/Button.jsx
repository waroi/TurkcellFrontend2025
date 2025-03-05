import { useTheme } from "../context/ThemeContext";

import React from 'react'

const Button = () => {
    const {theme, setTheme} = useTheme()
  return (
    <>
        <h1>Aktif Tema: {theme}</h1>
        <button onClick={()=>setTheme( theme === "light"? "dark" : "light")}></button>
    </>
  )
}

export default Button