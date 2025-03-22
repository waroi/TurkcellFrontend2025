import DataRender from "../components/HOCS/DataRender";
import { getAllJobs } from "../utils/services";

const UserProfile = () => {
  const renderUserData = (data) => {
    console.log("data", data);
    if (!data) {
      return <p>Loading...</p>;
    }

    return <div>"hello"</div>;
  };
  return <DataRender fetchFunction={getAllJobs} render={renderUserData} />;
};

export default UserProfile;
