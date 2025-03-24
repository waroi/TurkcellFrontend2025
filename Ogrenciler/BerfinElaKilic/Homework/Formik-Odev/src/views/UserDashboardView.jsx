import { Outlet } from "react-router";
import DataRender from "../components/HOCS/DataRender";
import { getCandidate } from "../utils/services";
import withAuth from "../components/HOCS/withAuth";
import { useParams, useLocation } from "react-router";
import UserDashboard from "../components/templates/UserDashboard";
import {useAuth} from '../context/AuthContext'

const User = () => {
  const params = useParams();
  const id = params.userId;
  const {setUser} = useAuth();
  const location = useLocation();

  const renderUserData = (data) => {
    console.log("data", data);
    if (!data) {
      return <p>Kullanıcı bilgileri yükleniyor...</p>;
    }
    else {
      setUser(data);
      return <UserDashboard data={data} location={location} />;
    };
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
