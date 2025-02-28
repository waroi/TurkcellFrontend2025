import Router from './Router/Router';
import './App.css';
import { fetchNews } from './service/api';

function App() {
  fetchNews();
  return (
    <>
      <Router />
    </>
  );
}

export default App;
