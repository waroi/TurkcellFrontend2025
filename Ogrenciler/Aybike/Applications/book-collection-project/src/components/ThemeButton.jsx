import { useTheme } from "../context/ThemeContext";
const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Tema Değiştir
      </button>
    </>
  );
};

export default ThemeButton;
