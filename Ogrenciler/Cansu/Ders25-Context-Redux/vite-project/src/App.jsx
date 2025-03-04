import Button from "./components/Button";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <div className={`app ${theme}`}>
        <h1>Context Uygulama</h1>
        <Button />
      </div>
    </>
  );
}

export default App;
