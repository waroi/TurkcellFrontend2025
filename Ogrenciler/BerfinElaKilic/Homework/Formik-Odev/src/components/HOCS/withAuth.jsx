import { useNavigate } from "react-router";
const withAuth = (WrappedComponent) => {
  const navigate = useNavigate();

  return (props) => {
    const isAuthenticated = useAuth(); // useAuth: kullanıcı doğrulama hook'u

    if (!isAuthenticated) {
      return <navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};
export default withAuth;
