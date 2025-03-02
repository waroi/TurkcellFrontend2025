import { Navigate, useRoutes } from 'react-router'
import HomeView from '../views/HomeView'
import CategoryView from '../views/CategoryView'
import NewsView from '../views/NewsView'
import TopHeadlinesView from '../views/TopHeadlinesView'

const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <HomeView /> },
        {
            path: '/news/', element: <NewsView />, children: [
                { index: true, element: <Navigate to={'top-headlines'} /> },
                { path: 'category/:categoryName', element: <CategoryView /> },
                { path: ':newsId', element: <h3>asdsadsa</h3> },
            ]
        },
        { path: '/top-headlines', element: <TopHeadlinesView /> },
    ])
    return routes
}

export default Router