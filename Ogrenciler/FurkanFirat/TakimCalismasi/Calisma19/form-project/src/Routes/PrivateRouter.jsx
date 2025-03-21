import { Navigate, Outlet } from 'react-router';

const PrivateRouter = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to='/login' replace />;
};

export default PrivateRouter;
