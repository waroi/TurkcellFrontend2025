import './App.css';
import { Provider } from "react-redux";
import Router from './routes/Router';
import store from './redux/store';
import { useTheme } from "./context/ThemeContext";



function App() {
  const {theme} = useTheme()

  return (
    
    <Provider store={store}>  
        <div className={`app ${theme}`}>
      <Router />
      </div>
    </Provider>
  );
}

export default App;