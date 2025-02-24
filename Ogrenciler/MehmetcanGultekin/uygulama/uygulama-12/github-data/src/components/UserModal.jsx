import { useEffect, useState } from "react";
import { getOneUser, getUserRepos } from "../api/useFetch";
import LanguageIcon from "./LanguageIcon";
import UserCard from "./userCard";

function UserModal({ userx, modalId }) {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getOneUser(userx);
      const repos = await getUserRepos(userx);
      setUser(data);
      setRepos(repos);
    };
    if (userx) {
      fetchUser();
    }
  }, [userx]);

  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      aria-labelledby={`${modalId}-label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="userModalLabel">
              Guthib Profili
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body ">
            <div className=" row ">
              <UserCard user={user} />
              <div className="col-8 margin-custom grid-custom">
                {repos &&
                  repos.map((repo) => (
                    
                    <div key={repo.id} className="card p-0 shadow-sm">
                      <div className="card-header"><LanguageIcon className="me-4" language={repo?.language} />
                      <span className="ms-2 m-0">{repo.language || "Dil bulunamadı"}</span>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{repo.full_name}</h5>
                        <p className="card-text">{repo.description}</p>
                        <p>{repo.created_at}</p>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          className="btn btn-primary"
                        >
                          Git
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserModal;
