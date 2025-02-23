import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  const sortedData = repos.sort((a, b) => {
    const aUpdated = new Date(a.updated_at)
    const bUpdated = new Date(b.updated_at)
    return bUpdated - aUpdated
  })
  return (
    <>
      <div>REPOS</div>
      {repos && repos.map((repoItem, index) =>
        (<RepoItem key={index} repoItem={repoItem} />)
      )}
    </>
  );
};

export default Repos;
