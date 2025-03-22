import { Outlet } from "react-router";
import DataRender from "../components/HOCS/DataRender";
import { getCandidate } from "../utils/services";
import withAuth from "../components/HOCS/withAuth";

const User = () => {
  const renderUserData = (data) => {
    console.log("data", data);
    if (!data) {
      return <p>Loading...</p>;
    }

    return <div>"hello"</div>;
  };
  return (
    <div>
      User <Outlet />
      <DataRender
        id="uCASWzKrJNZ39LhRBYX4D5QIbYA3"
        fetchFunction={getCandidate}
        render={renderUserData}
      />
    </div>
  );
};

const ProtectedUser = withAuth(User, "candidate");

export default ProtectedUser;
