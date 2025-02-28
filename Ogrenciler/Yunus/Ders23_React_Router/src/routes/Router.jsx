import { useRoutes } from 'react-router'
import HomeView from '../views/HomeView'
import UserView from '../views/UserView'
import Comments from '../views/CommentsView.jsx'
import UserRouter from './userRouter.jsx'
import ParametreView from '../views/ParametreView.jsx'


const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <HomeView /> },
        // { path: '/users', element: <UserView /> },
        UserRouter,
        { path: '/comments', element: <Comments /> },
        { path: '/parametre/:id', element: <ParametreView /> },
    ])
    return routes
}

export default Router