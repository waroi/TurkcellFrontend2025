import {
  getAllApplications,
  getUser,
  getUserApplications,
} from "../../firebase/dbController";

const getApplications = async (uid, setApps, setUser, setLoading) => {
  const fetchedUser = await getUser(uid);
  setUser(fetchedUser);
  if (fetchedUser && fetchedUser.role === "admin") {
    setApps(await getAllApplications());
  } else {
    setApps(await getUserApplications(uid));
  }
  setLoading(false);
};
export default getApplications;
