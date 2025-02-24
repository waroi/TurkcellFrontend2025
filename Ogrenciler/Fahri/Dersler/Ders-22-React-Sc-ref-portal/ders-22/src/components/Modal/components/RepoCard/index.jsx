const RepoCard = ({ repo }) => {
  return (
    <div className="mb-3">
      <div className="card shadow-lg p-3 w-100 rounded-3 border-start border-primary border-5">
        <div className="card-body">
          <h5 className="card-title">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary fw-bold text-decoration-none"
            >
              {repo.name}
            </a>
          </h5>
          <p className="card-text text-muted">
            {repo.description || "Açıklama yok"}
          </p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="badge bg-primary fs-6 px-3 py-2">
              ⭐ {repo.stargazers_count}
            </span>
            <span className="badge bg-secondary fs-6 px-3 py-2">
              🍴 {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;