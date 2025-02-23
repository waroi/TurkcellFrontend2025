import React from "react";
import styled from "styled-components";

const UserAvatar = styled.img`
  border-radius: 50%;
  box-shadow: 0px 0px 80px 25px #763cac;
  object-fit: cover;
`;
const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding: 1rem;
  border-radius: 22px;
`;

/**
 *  // Location
 *  // Email
 * <i className="fa-solid fa-building"></i> // Company
 * <i className="fa-solid fa-userss"></i> // Followers
 * <i className="fa-solid fa-users-plus"></i> // Following
 * <i className="fa-solid fa-users"></i> // Name
 * <i className="fa-solid fa-users"></i> // Login
 * <i className="fa-solid fa-users"></i> // Bio
 */

const UserCard = ({
  users,
  repositories,
  userInfos,
  setRepositories,
  fetchRepositories,
}) => {
  return (
    <div className="container mt-5">
      <div>
        <div
          key={users.id}
          className="row d-flex mb-5 justify-content-between align-items-center"
        >
          <div className="col-lg-3">
            (
            <UserAvatar
              src={users.avatar_url}
              alt={users.login}
              className={`img-fluid object-fit-cover avatar ${
                users.avatar_url !== null ? "d-block" : "d-none"
              } `}
            />
            )
            {userInfos.isEmpty ? null : (
              <UserInfos>
                <h3>{userInfos.name}</h3>
                <p>{userInfos.login}</p>
                <p>{userInfos.bio}</p>
                <p>
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  {userInfos.followers}
                </p>
                <p>{userInfos.following}</p>
                <p>{userInfos.company}</p>
                <p>{userInfos.location}</p>
                <p>
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  {userInfos.email}
                </p>
              </UserInfos>
            )}
          </div>
          <div className="col-lg-9">
            <div className="repositories">
              <div className="row">
                <div className="col-lg-6">
                  {repositories?.map((repo, index) => {
                    const odd = Math.abs(index % 2);
                    if (odd) {
                      return (
                        <>
                          <div
                            className="card bg-grad border-1 rounded-4 custom-border text-white mb-4"
                            key={repo.id}
                          >
                            <div className="card-body">
                              <h4 className="card-title">{repo.name}</h4>
                              <p className="card-text">{repo.description}</p>
                            </div>
                          </div>
                        </>
                      );
                    }
                    return null;
                  })}
                </div>
                <div className="col-lg-6">
                  {repositories?.map((repo, index) => {
                    const odd = Math.abs(index % 2);
                    if (!odd) {
                      return (
                        <>
                          <div
                            className="card bg-grad border-1 rounded-4 custom-border text-white mb-4"
                            key={repo.id}
                          >
                            <div className="card-body">
                              <h4 className="card-title">{repo.name}</h4>
                              <p className="card-text">{repo.description}</p>
                            </div>
                          </div>
                        </>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
