import { Div, LanguageIcon } from "../util/styled-components";
import color from "../util/color";

export default function Repository({ repository }) {
  return (
    <Div>
      <a href={repository.html_url} target="_blank">
        {repository.name}
      </a>
      <div>
        <LanguageIcon
          style={{
            backgroundColor: color[repository.language ?? "default"].color,
          }}
        />
        {repository.language ? <span>{repository.language}</span> : ""}
        <span>
          {(() =>
            "Updated " +
            new Date(repository.updated_at).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }))()}
        </span>
      </div>
    </Div>
  );
}
