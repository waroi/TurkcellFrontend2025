import {useTheme} from '../Context/ThemeContext';

const button = () => {
    const {theme,setTheme} =useTheme()
  return (
    <>
    <h2>Aktif tema:{theme}</h2>
    <button onClick={() => setTheme(theme==="light" ?"dark":"light")}>
        Tema Değiştir
    </button>
    </>    
)
}

export default button