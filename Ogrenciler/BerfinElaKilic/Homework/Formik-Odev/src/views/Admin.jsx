import { Outlet } from "react-router";
import { getAdmin } from "../utils/services";
import { useLocation, useParams } from "react-router";
import DataRender from "../components/HOCS/DataRender";
import withAuth from "../components/HOCS/withAuth";
import AdminDashboard from "../components/templates/AdminDashboard";


const AdminView = () => {
    const params = useParams();
    const id = params.adminId;
    const location = useLocation();
  
    const renderAdminData = (data) => {
      console.log("data", data);
      if (!data) {
        return <p>Admin bilgileri yükleniyor...</p>;
      }
      return <AdminDashboard data={data} location={location} />;
    };
  return (
    <>
      {id && (
        <DataRender
          id={id}
          fetchFunction={getAdmin}
          render={renderAdminData}
        />
      )}
    </>
  );
};

const ProtectedAdminDashboard = withAuth(AdminView, "admin");

export default ProtectedAdminDashboard;
