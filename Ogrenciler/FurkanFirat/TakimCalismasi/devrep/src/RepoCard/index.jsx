import * as Icon from 'react-bootstrap-icons';

const getIcon = (lang) => {
  switch (lang) {
    case 'TypeScript':
      return <Icon.FiletypeTsx />;
    case 'Python':
      return <Icon.FiletypePy />;
    case 'JavaScript':
      return <Icon.FiletypeJs />;
    case 'HTML':
      return <Icon.FiletypeHtml />;
    case 'CSS':
      return <Icon.FiletypeCss />;
    default:
      return <Icon.FileEarmarkCode />;
  }
};

export default function RepoCard({ repoData }) {
  const repoCards = repoData?.map((repo, index) => {
    return (
      <div key={index} className='p-2 col-12 col-md-6'>
        <div className='card h-100 p-2'>
          <div className='d-flex align-items-center'>
            <div className='d-flex justify-content-between w-100'>
              <h4 className='fs-6'>
                <Icon.JournalBookmarkFill className='mx-2' />
                {repo.name}
              </h4>
              <h6 className='text-capitalize badge text-bg-secondary '>
                {repo.visibility}
              </h6>
            </div>
          </div>
          <p className='ms-2'>{repo?.description}</p>

          <div className='ms-2 gap-1 d-flex align-items-center'>
            {getIcon(repo.language)}
            <p className='m-0'>{repo.language}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div className='row mt-3'>{repoCards}</div>;
}
