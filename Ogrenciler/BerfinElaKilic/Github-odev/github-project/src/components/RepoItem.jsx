import SplitButton from "./atoms/SplitButton";
import TagItem from "./tagItem";
import { FaRegStar } from "react-icons/fa";
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';


const RepoItem = ({ repoItem }) => {
  return (
    <div className="border-top border-bottom d-flex justify-content-between align-items-center py-3">
      <div>
        <div className="d-flex gap-2">
        <a href={repoItem.html_url} target="_blank" className="fw-bold fs-5 text-decoration-none">{repoItem.name} </a>
        <Badge bg="" className='me-1 border d-inline rounded-pill' style={{height: "max-content"}} text="dark">
               Public
            </Badge>
        
        </div>
        <p className="text-secondary w-75">{repoItem.description}</p>
        <div className="tags d-flex gap-2 align-items-center">
          <Stack direction="horizontal" className="w-100" gap={2}>
            {repoItem.topics.map((tag, index) => (
              
              (index < 6) ? <TagItem key={index} tag={tag} /> : ""
            ))}
          </Stack>
        </div>
        <div className="d-flex align-items-center gap-2 ">
          <div>{repoItem.language}</div>
          <div>
            <FaRegStar />
            <span>{repoItem.stargazers_count}</span>
          </div>
          {/* <div>{repoItem.pushed_at.slice(0, 10)}</div> */}
          <div>
            {repoItem.pushed_at &&
              new Date(repoItem.pushed_at).toLocaleDateString("tr-TR")}
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <SplitButton />
      </div>
    </div>
  );
};

export default RepoItem;
