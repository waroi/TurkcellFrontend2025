import { Navigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Firebase";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Yükleniyor...</p>;
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
