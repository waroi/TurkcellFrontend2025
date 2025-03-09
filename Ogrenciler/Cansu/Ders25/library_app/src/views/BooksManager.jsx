import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import RouterComponent from './routes/Router';
import './styles/main.scss';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <RouterComponent />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
