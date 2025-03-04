import { useRoutes } from 'react-router'
import App from '../App'
import BookLibrary from '../components/BookLibrary'


const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <BookLibrary /> }
    ])

    return routes
}

export default Router