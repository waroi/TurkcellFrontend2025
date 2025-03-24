import { Outlet } from "react-router";
import Admin from "../components/templates/Admin";
import { getAdmin } from "../utils/services";
import { useLocation, useParams } from "react-router";
import DataRender from "../components/HOCS/DataRender";
import withAuth from "../components/HOCS/withAuth";


const AdminView = () => {
    const params = useParams();
    const id = params.adminId;
    const location = useLocation();
  
    const renderAdminData = (data) => {
      console.log("data", data);
      if (!data) {
        return <p>Admin bilgileri yükleniyor...</p>;
      }
      return <Admin data={data} location={location} />;
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

export default AdminView;
