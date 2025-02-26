import { useRoutes } from 'react-router';
import HomeView  from '../views/HomeView';
import UserView from '../views/UserView';
import userRouter from './userRouter';
import ParametreView from '../views/ParametreView';

// const Router = () => {
//     const routes = useRoutes([
//         { path: '/', element: <HomeView/> },
//         { path: '/user', element: <UserView/> },
//     ]);
//     return routes;
// }

//bu şekilde de kullanımı var
const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <HomeView/> },
        userRouter,
        {path:'/parametre/:id', element:<ParametreView></ParametreView>},
    ]);
    return routes;
}

export default Router;