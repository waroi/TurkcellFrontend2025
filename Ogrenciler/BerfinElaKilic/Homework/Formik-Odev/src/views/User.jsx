import { Outlet } from "react-router";
import withAuth from "../components/HOCS/withAuth";

const User = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const ProtectedUser = withAuth(User, "user");

export default ProtectedUser;
