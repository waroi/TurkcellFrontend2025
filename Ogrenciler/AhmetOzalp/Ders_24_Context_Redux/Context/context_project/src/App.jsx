import Button from './Component/button'
import './App.css'
import { useTheme } from './Context/ThemeContext';

function App() {
  const {theme} = useTheme();
  return (
    <>
      <div className={`app ${theme}`}>
        <h1>Context Uygulama</h1>
        <Button/>
      </div>
    </>
  );
}

export default App
