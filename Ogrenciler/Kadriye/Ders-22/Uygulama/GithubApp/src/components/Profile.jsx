import "bootstrap-icons/font/bootstrap-icons.css";
import { StyledProfileCard, ProfileImage } from "./StyledComponents";

function getDate() {
  const localHours = new Date().getHours();
  const localMinutes = new Date().getMinutes();

  return `${localHours + ":" + localMinutes}`;
}

const Profile = ({ user }) => {
  return (
    <>
      <StyledProfileCard p={3}>
        <ProfileImage className="img-fluid" variant="top" src={user.avatar_url} />
        <ul className="list-unstyled mt-3">
          <li>
            <h3>{user.name}</h3>
          </li>
          <li>
            <p>@{user.login}</p>
          </li>
          <li>
            <p>{user.bio}</p>
          </li>
          <li>
            <a
              href={user.html_url}
              className="btn btn-dark "
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </li>
          <li>
            <i className="bi bi-people-fill"></i> {user.followers} followers ·{" "}
            {user.following} following
          </li>
          <li>
            <i className="bi bi-building"></i> {user.company || "Not Available"}
          </li>
          <li>
            <i className="bi bi-geo-alt"></i> {user.location || "Unknown"}
          </li>
          <li>
            <i className="bi bi-clock"></i> {getDate()}
          </li>
          {user.blog && (
            <li>
              <i className="bi bi-link-45deg"></i>
              <a
                href={`http://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.blog}
              </a>
            </li>
          )}
        </ul>
      </StyledProfileCard>
    </>
  );
};

export default Profile;
