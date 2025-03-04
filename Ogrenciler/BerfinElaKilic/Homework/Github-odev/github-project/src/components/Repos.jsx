import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  let sortedData = [];
  if (repos.length > 0 && repos) {
    sortedData = repos.sort((a, b) => {
      const aUpdated = new Date(a.pushed_at);
      const bUpdated = new Date(b.pushed_at);
      return bUpdated - aUpdated;
    });
  }

  return (
    <div className="border-subtle border-bottom">
      {sortedData.map((repoItem, index) => (
        <RepoItem key={index} repoItem={repoItem} />
      ))}
    </div>
  );
};

export default Repos;
