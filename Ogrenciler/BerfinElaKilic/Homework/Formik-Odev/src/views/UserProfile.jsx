import { useState } from "react";
import DataRender from "../components/HOCS/DataRender";
import DisplayForm from "../components/organisms/DisplayForm";
import PortalFormu from "../components/organisms/PortalFormu";
import { useAuth } from "../context/AuthContext";
import { getAllJobs } from "../utils/services";

const UserProfile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  //TODO:Buraya koşullu render ekleyebiliriz, görünteleme veya form hali gibi
  return (
    <>
      {!isEditing ? (
        <DisplayForm data={user} setIsEditing={setIsEditing} />
      ) : (
        <PortalFormu isEditing={isEditing} setIsEditing={setIsEditing} user={user}/>
      )}
    </>
  );
};

export default UserProfile;
