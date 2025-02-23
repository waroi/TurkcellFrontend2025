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

const UserCard = ({
  users,
  repositories,
  userInfos,
  setRepositories,
  fetchRepositories,
  langs,
}) => {
  return (
    <div className="container mt-5">
      <div>
        <div
          key={users.id}
          className="row d-flex mb-5 justify-content-between"
        >
          <div className="col-lg-3">
            <UserAvatar
              src={users.avatar_url}
              alt={users.login}
              className={`img-fluid object-fit-cover avatar ${
                users.avatar_url !== null ? "d-block" : "d-none"
              } `}
            />

            {userInfos.isEmpty ? null : (
              <UserInfos>
                <h3>{userInfos.name}</h3>
                <p>{userInfos.login}</p>
                <p>{userInfos.bio}</p>
                <div className="followersCount d-flex gap-2 ">
                  <span>
                    <i className="fa-solid fa-users"></i>
                  </span>
                  <p className="followersInfo">
                   {userInfos.followers} takipçi
                  </p>
                  <span> <p>|</p></span>
                  <p>{userInfos.following} takip edilen</p>
                </div>
                <p>
                  <span>
                    <i className="fa-solid fa-building me-2"></i>
                  </span>
                  {userInfos.company}
                </p>
                <p>
                  <span>
                    <i className="fa-solid fa-location-dot me-2"></i>
                  </span>
                  {userInfos.location}
                </p>
                <p>
                  <span>
                    <i className="fa-solid fa-envelope me-2"></i>
                  </span>
                  {userInfos.email ?? `${userInfos.login}@gmail.com`}
                </p>
              </UserInfos>
            )}
          </div>
          <div className="col-lg-9">
            <div className="repositories">
              <div className="row">
                <div className="col-lg-6" key={users.id*2}>
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
                              <a
                                href={`https://github.com/${users.login}/${repo.name}`}
                                target="_blank"
                                className="text-decoration-none"
                              >
                                <div className="d-flex justify-content-between">
                               <h4 className="card-title text-white">
                                  {repo.name}
                                </h4>
                                <h6><span className="badge rounded-pill text-bg-light">{repo.visibility}</span></h6>
                               </div>
                              </a>
                              <p className="card-text">{repo.description}</p>
                              <div className="d-flex justify-content-between">
                              <p className="card-text text-secondary mb-0"><i className="fa-solid fa-code me-2"></i>{langs[repo.name]}</p>
                              <p className="card-text text-secondary mb-0"><i className="fa-solid fa-star me-2"></i>
                                {repo.stargazers_count} </p> 
                              <p className="card-text text-secondary mb-0"><i className="fa-solid fa-calendar-days me-2"></i>{repo.created_at.slice(0, 10)}</p>
                              </div>
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
                              <a
                                href={`https://github.com/${users.login}/${repo.name}`}
                                target="_blank"
                                className="text-decoration-none"
                              >
                               <div className="d-flex justify-content-between">
                               <h4 className="card-title text-white">
                                  {repo.name}
                                </h4>
                                <h6><span className="badge rounded-pill text-bg-light">{repo.visibility}</span></h6>
                               </div>
                              </a>
                              <p className="card-text">{repo.description}</p>
                              <div className="d-flex justify-content-between">
                              <p className="card-text text-secondary mb-0"><i className="fa-solid fa-code me-2"></i>{langs[repo.name]}</p>
                              <p className="card-text text-secondary mb-0"><i className="fa-solid fa-star me-2"></i>
                                {repo.stargazers_count} </p> 
                              <p className="card-text text-secondary mb-0"><i className="fa-solid fa-calendar-days me-2"></i>{repo.created_at.slice(0, 10)}</p>
                              </div>
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
