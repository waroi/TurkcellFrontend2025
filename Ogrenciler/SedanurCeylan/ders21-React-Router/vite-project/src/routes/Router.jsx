import { useRoutes } from 'react-router'
import HomeView from '../views/HomeView'
import UserRouter from './userRouter'
import { use } from 'react'

const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <HomeView /> }, UserRouter
    ])
    return routes;
}

export default Router