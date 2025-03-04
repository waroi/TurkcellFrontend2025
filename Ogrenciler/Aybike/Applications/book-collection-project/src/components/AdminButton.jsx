import { useUser } from "../context/UserContext.jsx";
const AdminButton = () => {
  const { user, setUser } = useUser();
  return (
    <>
      <h2>Aktif Kullanıcı: {user}</h2>

      <button onClick={() => setUser(user === "User" ? "Admin": "User")}>
        Yetki Değiştir
      </button>
    </>
  );
};

export default AdminButton;
