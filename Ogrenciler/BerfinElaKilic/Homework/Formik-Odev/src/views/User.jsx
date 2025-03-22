import { Outlet } from "react-router";
import DataRender from "../components/HOCS/DataRender";
import { getAllJobs } from "../utils/services";

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
        id="userId"
        fetchFunction={getAllJobs}
        render={renderUserData}
      />
    </div>
  );
};

export default User;
