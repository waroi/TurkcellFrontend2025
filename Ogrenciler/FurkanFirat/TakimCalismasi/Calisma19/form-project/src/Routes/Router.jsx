import { useRoutes } from 'react-router';
import PrivateRouter from './PrivateRouter';
import { HomeView } from '../views/HomeView';
import { LoginView } from '../views/LoginView';
import { RegisterView } from '../views/RegisterView';
import { RegisterWarningView } from '../views/RegisterWarningView';
import { AdminView } from '../views/AdminView';
import { ExamView } from '../views/ExamView';
import { useAuth } from '../context/AuthContext';
import { ApplicationFormView } from '../views/ApplicationFormView';

export default function Router() {
  const { isLoggedIn } = useAuth();
  const router = useRoutes([
    { path: '/', element: <HomeView /> },
    { path: '/login', element: <LoginView /> },
    { path: '/register', element: <RegisterView /> },
    { path: '/register-warning', element: <RegisterWarningView /> },
    { path: '/technical-exam', element: <ExamView /> },
    { path: '/admin', element: <AdminView /> },
    {
      path: '/application-form',
      element: <PrivateRouter isLoggedIn={isLoggedIn} />,
      children: [{ index: true, element: <ApplicationFormView /> }],
    },
  ]);
  return router;
}
