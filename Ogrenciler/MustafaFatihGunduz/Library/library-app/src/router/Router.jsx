import { useRoutes } from 'react-router';
import App from '../App';
import LoginScreen from '../components/LoginScreen';
const Router = () => {
    const routes = useRoutes([
        {path: "/home", element: <App />},
        {path: "/login", element: <LoginScreen />},
    ])
    return routes;
}

export default Router;