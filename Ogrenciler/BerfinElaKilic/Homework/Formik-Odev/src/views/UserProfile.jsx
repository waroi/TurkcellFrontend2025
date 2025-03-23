import DataRender from "../components/HOCS/DataRender";
import PortalFormu from "../components/organisms/PortalFormu";
import { getAllJobs } from "../utils/services";

const UserProfile = () => {
  const renderUserData = (data) => {
    console.log("data", data);
    if (!data) {
      return <p>Loading...</p>;
    }

    return <div><PortalFormu/></div>;
  };
  return <DataRender fetchFunction={getAllJobs} render={renderUserData} />;
};

export default UserProfile;
