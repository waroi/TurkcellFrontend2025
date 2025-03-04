import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const TagItem = ({ tag }) => {
  return (
    <>
      <Badge bg="transparent" className="me-1 tag" text="dark">
        {tag}
      </Badge>
    </>
  );
};

export default TagItem;
