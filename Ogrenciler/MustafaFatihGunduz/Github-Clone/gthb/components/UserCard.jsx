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
 * <i class="fa-solid fa-location-dot"></i> // Location
 * <i class="fa-solid fa-envelope"></i> // Email
 * <i class="fa-solid fa-building"></i> // Company
 * <i class="fa-solid fa-users"></i> // Followers
 * <i class="fa-solid fa-user-plus"></i> // Following
 * <i class="fa-solid fa-user"></i> // Name
 * <i class="fa-solid fa-user"></i> // Login
 * <i class="fa-solid fa-user"></i> // Bio
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
        {users?.items?.map((user) => {
          return (
            <div
              key={user.id}
              className="row d-flex mb-5 justify-content-between align-items-center"
            >
              <div className="col-lg-3">
                <UserAvatar
                  src={user.avatar_url}
                  alt={user.login}
                  className="img-fluid object-fit-cover avatar"
                />
                <UserInfos>
                  <h3>{userInfos.name}</h3>
                  <p>{userInfos.login}</p>
                  <p>{userInfos.bio}</p>
                  <p>{userInfos.followers}</p>
                  <p>{userInfos.following}</p>
                  <p>{userInfos.company}</p>
                  <p>{userInfos.location}</p>
                  <p>{userInfos.email}</p>
                </UserInfos>
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
                                  <p className="card-text">
                                    {repo.description}
                                  </p>
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
                                  <p className="card-text">
                                    {repo.description}
                                  </p>
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
          );
        })}
      </div>
    </div>
  );
};

export default UserCard;
