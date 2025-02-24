import { Avatar } from "./styled";
function UserCard({ user }) {
  return (
    <div className="col-4 d-flex flex-column align-items-center px-5 position-fixed">
      <Avatar size="200px" src={user?.avatar_url} />
      <h4>{user?.name}</h4>
      <h5 className="fw-semibold fs-6">@{user?.login}</h5>
      <p className="w-75 text-center"> {user?.bio}</p>
      <div className="d-flex gap-2">
      <i className="fa-solid fa-user-group"></i>
        <p>{user?.followers} takipçi</p>
        <p>{user?.following} takip</p>
      </div>
      <p className="d-flex align-items-center gap-2">
        <i className="fa-solid fa-location-dot"></i>
        {user?.location || "Lokasyon bulunamadı"}
      </p>
      <a href={user?.blog}>{user?.blog || "Blog bulunamadı"}</a>
    </div>
  );
}
export default UserCard;
