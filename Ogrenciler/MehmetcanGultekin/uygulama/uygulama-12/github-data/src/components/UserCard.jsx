/* eslint-disable react/prop-types */
import { Avatar } from "./styled";
function UserCard({ user }) {
  return (
    <div className="col-4 d-flex flex-column align-items-center px-5 gap-2">
      {" "}
      <Avatar size="300px" src={user?.avatar_url} /> <h4>{user?.name}</h4>{" "}
      <h5>@{user?.login}</h5> <p className="w-50"> {user?.bio}</p>{" "}
      <div className="d-flex gap-4">
        {" "}
        <p>Takipçi Sayısı: {user?.followers}</p>{" "}
        <p>Takip Edilen: {user?.following}</p>{" "}
      </div>{" "}
      <p>{user?.location || "Lokasyon bulunamadı"}</p>{" "}
      <p>{user?.blog || "Blog bulunamadı"}</p>{" "}
    </div>
  );
}
export default UserCard;
