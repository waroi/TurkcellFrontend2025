import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./modal.module.css";

const UserModal = ({ userData, repos, modalKapat }) => {
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={`${styles.modal} container-fluid row`}>
        <div className="col-lg-6 col-md-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center">
          <button className={styles.closeButton} onClick={modalKapat}>
            ✖
          </button>
          <h1 className="mb-4">
            {userData.name} ({userData.login})
          </h1>
          <img
            className={styles.avatar}
            src={userData.avatar_url}
            alt="Avatar"
          />
          <p className="mt-4 fs-3">
            <strong>Bio:</strong> {userData.bio || "Biyografi yok"}
          </p>
          <p className="fs-3">
            <strong>Location:</strong> {userData.location || "Bilinmiyor"}
          </p>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 p-4">
          <h3>Repositories</h3>
          <div className={styles.repoContainer}>
            <ul className={styles.repoList}>
              {repos.map((repo) => (
                <li key={repo.id} className={styles.repoItem}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default UserModal;
