import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </ThemeProvider>
  </StrictMode>,
)
