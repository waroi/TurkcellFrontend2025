import { useRoutes } from 'react-router';
import HomeView from '../views/HomeView';
import AdminView from '../views/AdminView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';

export default function Router() {
  const router = useRoutes([
    { path: '/', element: <HomeView /> },
    { path: '/login', element: <LoginView /> },
    { path: '/register', element: <RegisterView /> },
    { path: '/admin', element: <AdminView /> },
  ]);
  return router;
}
