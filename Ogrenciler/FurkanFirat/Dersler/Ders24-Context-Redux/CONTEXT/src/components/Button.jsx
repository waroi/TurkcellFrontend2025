import { useTheme } from '../context/ThemeContext';

export default function Button() {
  const { theme, setTheme } = useTheme();
  const handleButtonClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <h2>Aktif Tema: {theme}</h2>
      <button onClick={handleButtonClick}>Tema Değiştir</button>
    </>
  );
}
