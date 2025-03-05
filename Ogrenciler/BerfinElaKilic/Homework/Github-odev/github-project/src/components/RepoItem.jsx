import SplitButton from "./atoms/SplitButton";
import TagItem from "./tagItem";
import { FaRegStar } from "react-icons/fa";
import Stack from "react-bootstrap/Stack";
import Badge from "react-bootstrap/Badge";

const RepoItem = ({ repoItem }) => {
  const languageColors = {
    HTML: "#e34c26",
    CSS: "#663399",
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Vue: "#41b883",
    Svelte: "#ff3e00",
    Astro: "#ff5a03",
    Dart: "#00B4AB",
    "C#": "#178600",
    Python: "#3572A5",
    "C++": "#f34b7d",
  };

  let langColor = languageColors[repoItem.language] || "transparent";

  return (
    <div className="border-light-subtle border-top  d-flex justify-content-between align-items-center py-3 gap-2">
      <div className="d-flex gap-2 flex-column flex-1">
        <div className="repo-item d-flex align-items-center justify-content-start gap-2">
          <a
            href={repoItem.html_url}
            target="_blank"
            className="fw-bold fs-5 text-decoration-none"
          >
            {repoItem.name}{" "}
          </a>
          <Badge
            bg="transparent"
            className="me-1 border border-secondary d-inline rounded-pill"
            style={{ height: "max-content" }}
            text="secondary"
          >
            Public
          </Badge>
        </div>
        {repoItem?.description && (
          <p className="text-secondary text-sm mb-0">{repoItem?.description}</p>
        )}
        <div className="tags d-flex gap-2 align-items-center">
          <Stack direction="horizontal" className="w-100 flex-wrap" gap={2}>
            {repoItem.topics.map((tag, index) =>
              index < 6 ? <TagItem key={index} tag={tag} /> : ""
            )}
          </Stack>
        </div>
        <div className="d-flex repo-info align-items-center gap-5 text-secondary">
          {repoItem.language && (
            <div className="d-flex align-items-center gap-1">
              <span
                className="lang-color"
                style={{ backgroundColor: langColor }}
              ></span>
              {repoItem.language}
            </div>
          )}
          <div className="d-flex align-items-center gap-2">
            <FaRegStar />
            <span>{repoItem.stargazers_count}</span>
          </div>
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
