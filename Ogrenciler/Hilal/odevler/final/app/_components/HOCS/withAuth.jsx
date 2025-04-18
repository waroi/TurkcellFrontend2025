import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const withAuth = (WrappedComponent, role) => {
  return (props) => {
    const navigate = useNavigate();
    const { user } = useAuth();

    console.log("user", user);
    useEffect(() => {
      if (!user) {
        navigate("/login");
      }
    }, [user, navigate]);

    if (!user) return <p>Loading...</p>;
    else if (user && role && user.role !== role) {
      return <p>Sayfaya girme yetkiniz yoktur.</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
