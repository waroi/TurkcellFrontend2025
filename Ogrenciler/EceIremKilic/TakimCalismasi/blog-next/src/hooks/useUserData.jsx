import { useEffect, useState } from "react";
import { getCurrentUser, getUserData } from "@/controller/AuthController";

export const useUserData = (id) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = getCurrentUser();
      if (user) {
        const data = await getUserData(user.uid);
        setUserData(data);
      }
    };

    fetchUserData();
    console.log("userdata", userData);
  }, []);

  return { userData };
};
