import { Navigate, Outlet } from 'react-router';

const PrivateRouter = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to='/register-warning' replace />;
};

export default PrivateRouter;
