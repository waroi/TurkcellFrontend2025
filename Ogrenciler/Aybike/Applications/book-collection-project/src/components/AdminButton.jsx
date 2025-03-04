import { useUser } from "../context/UserContext.jsx";
const AdminButton = () => {
  const { user, setUser } = useUser();
  return (
    <>
      <h2>Aktif Kullanıcı: {user}</h2>

      <AdminButton onClick={() => setUser(user === "true" ? "true" : "false")}>
        Yetki Değiştir
      </AdminButton>
    </>
  );
};

export default AdminButton;
