const SideBar = ({ postItem }) => {
  console.log("Desctiption:", postItem.description);
  return (
    <>
      <div className="profile text-center mb-5">
        <img
          src={postItem.profile.profile_image}
          alt="Profile Image"
          className="profile-image"
        />
      </div>

      <div className="description text-center mb-5">
        <h3>{postItem.author}</h3>
        <p className="fs-6">{postItem.profile.description}</p>
      </div>
      <div className="topics">
        <h4 className="mb-1 fs-4">İlgi Alanlarım</h4>
        <u className="">
          <li>Yazılım Geliştirme</li>
          <li>Frontend Teknolojileri</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>Web Tasarım</li>
        </u>
      </div>
    </>
  );
};
export default SideBar;
