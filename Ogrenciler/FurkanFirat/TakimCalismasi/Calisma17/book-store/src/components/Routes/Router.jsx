import { useRoutes } from 'react-router';
import HomeView from '../../views/HomeView';
import AdminView from '../../views/AdminView';
import BookDetailsView from '../../views/BookDetailsView';

export default function Router() {
  const router = useRoutes([
    { path: '/', element: <HomeView /> },
    { path: '/admin', element: <AdminView /> },
    { path: '/book/:id', element: <BookDetailsView /> },
  ]);
  return router;
}
