import { useEffect, useState } from "react";
import { getOneUser, getUserRepos } from "../api/useFetch";

import UserCard from "./UserCard";
function UserModal({ userName }) {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const data = await getOneUser(userName);
      const repos = await getUserRepos(userName);
      setUser(data);
      setRepos(repos);
    };
    if (userName) {
      fetchUser();
    }
  }, [userName]);
  return (
    <div
      className="modal fade"
      id="userModal"
      tabIndex="-1"
      aria-labelledby="userModalLabel"
      aria-hidden="true"
    >
      {" "}
      <div className="modal-dialog modal-fullscreen">
        {" "}
        <div className="modal-content">
          {" "}
          <div className="modal-header">
            {" "}
            <h1 className="modal-title fs-5" id="userModalLabel">
              {" "}
              Github Profili{" "}
            </h1>{" "}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>{" "}
          </div>{" "}
          <div className="modal-body ">
            {" "}
            <div className=" row ">
              {" "}
              <UserCard user={user} /> <div className="col-8"></div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="modal-footer">
            {" "}
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              {" "}
              Close{" "}
            </button>{" "}
            <button type="button" className="btn btn-primary">
              {" "}
              Save changes{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default UserModal;
