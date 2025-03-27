import { Outlet } from "react-router";
import { getAdmin } from "../utils/services";
import { useLocation, useParams } from "react-router";
import DataRender from "../components/HOCS/DataRender";
import withAuth from "../components/HOCS/withAuth";
import AdminDashboard from "./AdminDashboard";

const AdminView = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const ProtectedAdminDashboard = withAuth(AdminView, "admin");

export default ProtectedAdminDashboard;
