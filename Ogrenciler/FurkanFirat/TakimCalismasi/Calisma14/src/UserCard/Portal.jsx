import ReactDOM from "react-dom";
import * as Icon from "react-bootstrap-icons";

export default function Portal({ userData, target }) {
  return ReactDOM.createPortal(

      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Followers: {userData.followers}
          <Icon.PeopleFill className="mx-2" />
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Following: {userData.following}
          <Icon.PersonFill className="mx-2" />
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Public Repos: {userData.public_repos}
          <Icon.GlobeAmericas className="mx-2" />
        </li>
      </ul>,
    target
  );
}
