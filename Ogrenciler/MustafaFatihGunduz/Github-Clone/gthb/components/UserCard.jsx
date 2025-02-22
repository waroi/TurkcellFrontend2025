import React from "react";
import styled from "styled-components";

const UserAvatar = styled.img`
  border-radius: 50%;
  box-shadow: 0px 0px 80px 25px #763cac;
  object-fit: cover;
`;

const UserCard = ({
  users,
  repositories,
  setRepositories,
  fetchRepositories,
}) => {
  return (
    <div className="container mt-5">
      <div>
        {users?.items?.map((user) => {
          //console.log(repositories);
          return (
            <div key={user.id} className="row">
              <div className="col-lg-3">
                <UserAvatar
                  src={user.avatar_url}
                  alt={user.login}
                  className="img-fluid object-fit-cover avatar"
                />
              </div>
              <div className="col-lg-9">
                <div className="repositories">
                  <div className="row">
                    <div className="col-lg-6">
                      {repositories?.map((repo, index) => {
                        const odd = repositories[index]%2 == 0;
                        console.log(odd);
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
