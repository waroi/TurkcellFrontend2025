import { useTheme } from "../context/ThemeContext";

const Button = () => {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <button onClick={toggleTheme} className="btn btn-outline-primary">
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default Button;
