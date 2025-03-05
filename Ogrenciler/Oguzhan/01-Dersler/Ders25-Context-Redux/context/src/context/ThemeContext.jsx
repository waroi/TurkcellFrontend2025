import React from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  return (
    <div>ThemeContext</div>
  )
}

export default ThemeContext