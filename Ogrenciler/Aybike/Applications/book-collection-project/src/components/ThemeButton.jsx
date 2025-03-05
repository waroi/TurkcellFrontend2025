import { useTheme } from "../context/ThemeContext";
const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="px-2" type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
      </div>
    </>
  );
};

export default ThemeButton;
