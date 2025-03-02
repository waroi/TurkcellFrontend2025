import { useRoutes } from 'react-router'
import HomeView from '../views/HomeView'
import CategoryView from '../views/CategoryView'

const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <HomeView /> },
        {
            path: '/news/', element: <h1>SADIKJASFJKASFSAŞD</h1>, children: [
                { path: 'category/:categoryName', element: <CategoryView />},
                // { path: ':newsId', element: <h3>asdsadsa</h3> }
            ]
        },
    ])
    return routes
}

export default Router