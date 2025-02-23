import "./index.css";
import * as Icon from "react-bootstrap-icons";

export default function UserCard({ userData }) {
  return (
    <div id="cardWrapper" className="card d-flex flex-row flex-wrap">
      <div className=" d-flex flex-column p-3 justify-content-center align-items-center">
        <img className="rounded-circle" src={userData.avatar_url} alt="" />
        <h4>{userData.name}</h4>
        <p className="text-secondary">{userData.login}</p>
      </div>
      <div className="border border-1 my-3">
      </div>
      <div className="d-flex justify-content-center align-items-center p-3 w-100">
        <ul className="list-group">
        
          <li className="list-group-item d-flex justify-content-between align-items-center">Followers: {userData.followers}<Icon.PeopleFill className="mx-2"/></li>
          <li className="list-group-item d-flex justify-content-between align-items-center">Following: {userData.following}<Icon.PersonFill className="mx-2"/></li>
          <li className="list-group-item d-flex justify-content-between align-items-center">Public Repos: {userData.public_repos}<Icon.GlobeAmericas className="mx-2"/></li>

        </ul>
        
      </div>
      <div className="border border-1 my-3">
      </div>
      <div className="bosDiv w-100">
      </div>
    </div>
  );
}
