import { Outlet } from "react-router";
import Admin from "../components/templates/Admin";

const AdminView = () => {
  return (
    <>
      <Admin/>
      <Outlet />
    </>
  );
};

export default AdminView;
