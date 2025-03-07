import { useRoutes } from 'react-router';
import HomeView from '../views/HomeView';
import AdminView from '../views/AdminView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import { useAuth } from '../context/authContext';
import PrivateRoute from './PrivateRoute';

export default function Router() {
  const { isLoggedIn } = useAuth();
  const router = useRoutes([
    { path: '/', element: <HomeView /> },
    { path: '/login', element: <LoginView /> },
    { path: '/register', element: <RegisterView /> },
    {
      path: '/admin',
      element: <PrivateRoute isLoggedIn={isLoggedIn} />,
      children: [{ index: true, element: <AdminView /> }],
    },
  ]);
  return router;
}
