import { Navigate, useRoutes } from 'react-router'
import BookLibrary from '../components/BookLibrary/BookLibrary'
import HomeView from '../views/HomeView'
import BookView from '../views/BookView'
import PopularityView from '../views/PopularityView'
import BooksView from '../views/BooksView'


const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <HomeView /> },
        { path: '/library', element: <BookLibrary /> },
        {
            path: '/books/', element: <BooksView />, children: [
                { index: true, element: <Navigate to={'/'} /> },
                { path: ':bookId', element: <BookView /> }
            ]
        },
        { path: '/popular-books', element: <PopularityView /> }
    ])

    return routes
}

export default Router