import { useUser } from "../context/UserContext.jsx";
const AdminButton = () => {
  const { user, setUser } = useUser();
  return (
    <>
    <div className="px-2" type="button" onClick={() => setUser(user === "User" ? "Admin": "User")}>
      {user ==="Admin" ? <i className="fa-solid fa-user-tie" />: <i className="fa-solid fa-user"></i>}
    </div>
    </>
  );
};

export default AdminButton;
