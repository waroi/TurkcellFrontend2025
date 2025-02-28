import { useRoutes, Navigate } from 'react-router'
import HomeView from '../views/HomeView'
import UserView from '../views/UserView'
import Comments from '../views/CommentsView.jsx'
import UserRouter from './userRouter.jsx'
import ParametreView from '../views/ParametreView.jsx'
import NewView from '../views/NewView.jsx'
import SportView from '../views/SportView.jsx'
import EconomyNewView from '../views/EconomyNewView.jsx'


const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <HomeView /> },
        // { path: '/users', element: <UserView /> },
        UserRouter,
        { path: '/comments', element: <Comments /> },
        { path: '/parametre/:id', element: <ParametreView /> },
        {
            path: '/news/', element: <NewView />,
            children: [
                { index: true, element: <Navigate /> },
                { path: 'sport', element: <SportView /> },
                { path: 'economy', element: <EconomyNewView /> },
            ]
        }
    ])
    return routes
}

export default Router