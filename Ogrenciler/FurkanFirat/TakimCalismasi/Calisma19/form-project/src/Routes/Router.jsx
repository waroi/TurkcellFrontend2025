import { useRoutes } from 'react-router';
import PrivateRouter from './PrivateRouter';
import { HomeView } from '../views/HomeView';
import { LoginView } from '../views/LoginView';
import { RegisterView } from '../views/RegisterView';
import { AdminView } from '../views/AdminView';
import { useAuth } from '../context/AuthContext';
import { ApplicationFormView } from '../views/ApplicationFormView';

export default function Router() {
  const { isLoggedIn } = useAuth();
  const router = useRoutes([
    { path: '/', element: <HomeView /> },
    { path: '/login', element: <LoginView /> },
    { path: '/register', element: <RegisterView /> },
    { path: '/application-form', element: <ApplicationFormView /> },
    {
      path: '/admin',
      element: <PrivateRouter isLoggedIn={isLoggedIn} />,
      children: [{ index: true, element: <AdminView /> }],
    },
  ]);
  return router;
}
