import './App.css';
import { Provider } from 'react-redux';  // Redux Provider importu
import Router from './routes/Router';    // Router bileşenini import et
import store from './redux/store';             // Redux store'u import et

function App() {
  return (
    <Provider store={store}>  {/* Redux store'u sağla */}
      <Router />              {/* Router bileşenini render et */}
    </Provider>
  );
}

export default App;

