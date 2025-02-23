import SplitButton from "./atoms/SplitButton";
import TagItem from "./tagItem";

const RepoItem = ({ repoItem }) => {
  return (
    <div className="border-top border-bottom d-flex justify-content-between align-items-center py-3">
      <div>
        <h1 className="fw-bold fs-4">
          {repoItem.name}
        </h1>
        <p className="text-secondary">
          {repoItem.description}
        </p>
        <div className="tags d-flex gap-2 align-items-center">
          {repoItem.topics.map((tag, index) => <TagItem key={index} tag={tag} />)}
        </div>
        <div className="d-flex align-items-center gap-2 ">
          <div>
            {repoItem.language}
          </div>
          <div>
            <span>
              {repoItem.stargazers_count > 0 ? repoItem.stargazers_count : ''}
            </span>
          </div>
          {/* <div>{repoItem.pushed_at.slice(0, 10)}</div> */}
          <div>{repoItem.pushed_at && new Date(repoItem.pushed_at).toLocaleDateString('tr-TR')}</div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <SplitButton />
      </div>
    </div>
  );
};

export default RepoItem;
