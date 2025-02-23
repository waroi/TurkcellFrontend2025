import * as Icon from "react-bootstrap-icons";


export default function RepoCard({repoData}) {
  const repoCards = repoData.map((repo)=>{
    return(
      <div className="card my-2">
        <div>
        <h4 className="d-flex align-items-center fs-6"><Icon.JournalBookmarkFill className="mx-2"/>{repo.name}</h4>

        </div>
        <p className="ms-2">{repo.description}</p>
      </div>
    )
  })

  return (
      <div className="d-flex flex-column mt-3">
        {repoCards}
      </div>
  );
}
