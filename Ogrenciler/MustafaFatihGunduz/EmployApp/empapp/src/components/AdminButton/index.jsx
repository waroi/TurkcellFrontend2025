import { Link } from "react-router-dom";
import '../../../src/styles/variables.css';
import styles from "./AdminButton.module.css";

const AdminButton = () => {
  return (
    <Link to="/admin" className={styles.adminButton}>
      <i className="bi bi-shield-lock"></i>
      Admin Paneline Git
    </Link>
  );
};

export default AdminButton;
