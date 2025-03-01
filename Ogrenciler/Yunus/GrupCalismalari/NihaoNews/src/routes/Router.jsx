import { useRoutes } from 'react-router'
import HomeView from '../views/HomeView'
import Header from '../components/Header/Header'

const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <HomeView /> },
        {
            path: '/news/', element: <h1>SADIKJASFJKASFSAŞD</h1>, children: [
                { path: ':categoryName', element: <h1>category VİEW GELİR</h1> },
                { path: ':newsId', element: <h3>asdsadsa</h3> }
            ]
        },
    ])
    return routes
}

export default Router