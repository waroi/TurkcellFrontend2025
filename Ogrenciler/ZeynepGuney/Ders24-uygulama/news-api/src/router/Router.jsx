import { useRoutes } from 'react-router';
import Home from '../view/Home';
const Router = () => {
    const routes = useRoutes([
        {
            path:'/home',
            element:<Home/>, 
           }
    ]);
    return routes;
}

export default Router;