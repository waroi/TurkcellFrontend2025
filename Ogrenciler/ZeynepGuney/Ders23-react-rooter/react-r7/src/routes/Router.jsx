import { useRoutes, Navigate } from 'react-router';
import HomeView  from '../views/HomeView';
import UserView from '../views/UserView';
import userRouter from './userRouter';
import ParametreView from '../views/ParametreView';
import NewView from '../views/NewView';
import SportNewView from '../views/SportNewView';
import EconomyNewView from '../views/EconomyNewView';


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
        // { path: '/', element: <HomeView/> },
        // userRouter,
        // {path:'/parametre/:id', element:<ParametreView></ParametreView>},
        {
            path:'/haberler/',
            element:<NewView></NewView>, 
            children:[ 
                {index:true, element:<Navigate to="spor"></Navigate>},
                {path:"spor", element:<SportNewView></SportNewView>},
                {path:"ekonomi", element:<EconomyNewView></EconomyNewView>},
        ]}
    ]);
    return routes;
}

export default Router;