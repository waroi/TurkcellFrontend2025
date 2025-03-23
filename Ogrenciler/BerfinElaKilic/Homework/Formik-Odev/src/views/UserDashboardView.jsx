import { Outlet } from "react-router";
import DataRender from "../components/HOCS/DataRender";
import { getCandidate } from "../utils/services";
import withAuth from "../components/HOCS/withAuth";
import { useParams, useLocation } from "react-router";
import UserDashboard from "../components/templates/UserDashboard";

const User = () => {
  const params = useParams();
  const id = params.userId;
  const location = useLocation();

  const renderUserData = (data) => {
    console.log("data", data);
    if (!data) {
      return <p>Kullanıcı bilgileri yükleniyor...</p>;
    }
    return <UserDashboard data={data} location={location} />;
  };
  return (
    <>
      {id && (
        <DataRender
          id={id}
          fetchFunction={getCandidate}
          render={renderUserData}
        />
      )}
    </>
  );
};

const ProtectedUserDashboard = withAuth(User, "user");

export default ProtectedUserDashboard;
