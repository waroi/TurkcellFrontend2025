import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  return (
    <>
      <div>REPOS</div>
      {repos.map((repoItem, index) => {
        <RepoItem key={index} repoItem={repoItem} />;
      })}
    </>
  );
};

export default Repos;
