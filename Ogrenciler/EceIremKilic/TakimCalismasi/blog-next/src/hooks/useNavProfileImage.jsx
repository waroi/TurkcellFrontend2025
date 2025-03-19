import { useState, useEffect } from "react";
import useAuthStore from "@/store/useAuthStore";
import { getProfileImageUrl } from "@/controller/DBController";

const useNavProfileImage = () => {
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const { user } = useAuthStore();

  useEffect(() => {
    const fetchProfileImage = async () => {
      if (user) {
        const url = await getProfileImageUrl();
        setProfileImageUrl(url);
      } else {
        setProfileImageUrl(null);
      }
    };
    fetchProfileImage();
  }, [user]);
  return { profileImageUrl };
};

export default useNavProfileImage;
