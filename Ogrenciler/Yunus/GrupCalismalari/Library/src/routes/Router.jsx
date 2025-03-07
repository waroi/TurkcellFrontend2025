import { Navigate, useRoutes } from 'react-router'
import BookLibrary from '../components/BookLibrary/BookLibrary'
import HomeView from '../views/HomeView'
import BookView from '../views/BookView'
import PopularityView from '../views/PopularityView'
import BooksView from '../views/BooksView'
import RegisterView from '../views/RegisterView'
import LoginView from '../views/LoginView'
import Publisher from '../components/Publisher/Publisher'
import AdminView from '../views/AdminView'


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
        { path: '/popular-books', element: <PopularityView /> },
        { path: '/login', element: <LoginView /> },
        { path: '/register', element: <RegisterView /> },
        { path: '/publisher', element: <Publisher /> },
        { path: '/admin', element: <AdminView /> },
    ])

    return routes
}

export default Router