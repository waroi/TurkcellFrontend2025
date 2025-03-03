import  {useTheme}  from "../context/ThemeContext";

 const Button = () => {
    const {theme, setTheme} = useTheme();
    return(
        <>
            <h2>Aktif Tema: {theme}</h2>
            <button onClick={() => setTheme(theme == "light" ? "dark" : "light")}></button>
        </>
    )
}
export default Button;