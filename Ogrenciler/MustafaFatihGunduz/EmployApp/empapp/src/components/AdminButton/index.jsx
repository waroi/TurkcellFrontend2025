import { Link } from "react-router-dom";

const AdminButton = () => {
  return (
    <Link to="/admin">
      <button className="btn btn-primary">Admin Paneline Git</button>
    </Link>
  );
};

export default AdminButton;
