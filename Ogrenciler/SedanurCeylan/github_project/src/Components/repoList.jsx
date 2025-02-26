import React from "react";

function RepoList({ repos }) {
  return (
    <div className="container text-center mt-4">
      {repos.length > 0 ? (
        <div className="row ">
          {repos.map((repo) => (
            <div key={repo.id} className="col-md-6 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                  </h5>
                  <p className="card-text">{repo.description || "Açıklama Buunamadı."}</p>
                  <span className="badge bg-primary">⭐ {repo.stargazers_count} Stars</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center fs-4 fw-medium opacity-75 text-white">Repository Bulunamadı.</p>
      )}
    </div>
  );
}

export default RepoList;
