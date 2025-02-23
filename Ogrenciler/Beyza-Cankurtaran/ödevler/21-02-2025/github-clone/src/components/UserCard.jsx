import { Aside, Button } from "../util/styled-components";

export default function UserCard({ user }) {
  if (user)
    return (
      <Aside>
        <img
          src={
            user.avatar_url ??
            "https://infravis.se/wp-content/uploads/2023/10/avatar.png"
          }
          alt="Profile"
        />
        <div>
          <h2>{user.name}</h2>
          <h3>
            <a href={user.html_url} target="_blank">{`@${user.login}`}</a>
          </h3>
          <p>{user.bio ? user.bio : "No Bio"}</p>
          <p>
            <i className="fa-solid fa-users"></i> {user.followers} Followers
            <br />
            <i className="fa-solid fa-user-plus"></i> {user.following} Following
          </p>
          <p className="join-date">
            {(() =>
              "Joined " +
              new Date(user.created_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }))()}
          </p>
          <Button href={user.html_url} target="_blank">
            View Profile
          </Button>
        </div>
      </Aside>
    );
  else
    return (
      <Aside>
        <img
          src="https://infravis.se/wp-content/uploads/2023/10/avatar.png"
          alt="Profile"
        />
        <h2>No User</h2>
      </Aside>
    );
}
