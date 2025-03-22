import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
      if (!user) {
        navigate("/login");
      }
    }, [user, navigate]);

    if (!user) return <p>Loading...</p>;

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
