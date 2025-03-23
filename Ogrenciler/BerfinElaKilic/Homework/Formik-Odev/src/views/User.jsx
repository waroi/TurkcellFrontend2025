import { Outlet } from "react-router";
import DataRender from "../components/HOCS/DataRender";
import { getCandidate } from "../utils/services";
import withAuth from "../components/HOCS/withAuth";
import { useParams } from "react-router";
import UserDashboard from "../components/templates/UserDashboard";

const User = () => {
  const params = useParams();
  const id = params.userId;

  const renderUserData = (data) => {
    console.log("data", data);
    if (!data) {
      return <p>Kullanıcı bilgileri yükleniyor...</p>;
    }

    return <UserDashboard />;
  };
  return (
    <div>
      <Outlet />
      {id && (
        <DataRender
          id={id}
          fetchFunction={getCandidate}
          render={renderUserData}
        />
      )}
    </div>
  );
};

const ProtectedUser = withAuth(User, "user");

export default ProtectedUser;
